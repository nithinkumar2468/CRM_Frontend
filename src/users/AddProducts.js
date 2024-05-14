import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";

function AddProducts() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    pname: "",
    price: "",
    rating: "",
    brand: "",
  });

  const { pname, price, rating, brand } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/n1/product", user);
    navigate("/viewproducts");
  };

  return (
    <div>
      <Navbar2 />
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
                  name="pname"
                  value={pname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Price" className="form-label">
                  Price
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter the price"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Rating" className="form-label">
                  Rating
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your rating"
                  name="rating"
                  value={rating}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Brand" className="form-label">
                  Brand
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the Brand of the Mobile"
                  name="brand"
                  value={brand}
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
}
export default AddProducts;