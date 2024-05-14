import React, { useState } from "react";
import Navbar1 from "./Navbar1";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MyOrders = () => {

    let navigate=useNavigate();

    const useremail = window.localStorage.getItem("isLoggedIn");

  const [order, setOrder] = useState({
    username: "",
    email: `${useremail}`,
    pname: "",
    orderdate: "2024-06-02",
    totalprice: "200",
    address: "ganesh nagar",
  });
  
const { username, email, pname, totalprice, address } = order;

  const onInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    
    e.preventDefault();
    await axios.post("http://localhost:8080/api/n1/orderstesting", order);
    navigate("/myaddress");
  };
  return (
    <div>
      <Navbar1 />
      <div className="py-20 container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add Product</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Product Name" className="form-label">
                  Product Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the product name"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/viewproducts">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
