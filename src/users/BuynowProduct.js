import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/ContextCart";
import Navbar1 from "./Navbar1";

export default function BuynowProduct() {
  const { addToCart, cartItems } = useCart();

  const [button,setButton] = useState("Add To Cart");

  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    pname: "",
    price: "",
    rating: "",
    brand:","
  });

  const { pname, price, rating ,brand} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    navigate("/payments", {
      state: { pname: pname, price: price },
    });
  };

  const loadUser = async () => {
    const result = await axios.get(`https://stscrmbackend-production.up.railway.app/api/n1/product/${id}`);
    console.log(user);
    setUser(result.data);
  };

  

  return (
    <div style={{backgroundColor: "aliceblue"}}>
      <Navbar1 />
      <div className="container py-20" style={{backgroundColor: "aliceblue"}}>
        <div
          className="py-10"
          style={{ float: "left", width: "40%", backgroundColor: "aliceblue" }}
        >
          <div style={{padding:"80px"}}>
          <img
            src={`https://crmproduct.s3.ap-south-1.amazonaws.com/${pname.toLowerCase().replace(/\s/g,'').slice(0,16)}.webp`}
            alt="mobile"
            style={{ width: "500px", heigth: "400px" }}
          />
          </div>
        </div>
        <div
          className="py-10"
          style={{ "float":"right", width: "60%" }}
        >
         <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Product Name" className="form-label">
                  <h3>Product Name</h3>
                </label>
                <br></br>
                <h4 style={{ "color": "#cc3300" }}>{pname}</h4>
              </div>
              <div className="mb-3">
                <label htmlFor="Rating" className="form-label">
                  <h3>Rating</h3>
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter Rating"
                  name="rating"
                  value={rating}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  <h3>Price</h3>
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter price"
                  name="price"
                  value={location.state.price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <h3>Manufactured by <br></br> <span style={{ "color": "#cc3300" }}>{brand.toLocaleLowerCase()}</span></h3>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Checkout
              </button>
              &nbsp;&nbsp;&nbsp;
              <Link
                onClick={() => {addToCart(user)}}
                className="btn btn-outline-primary"
              >
                {button}
              </Link>
              &nbsp;
              <Link className="btn btn-outline-danger mx-2" to="/products">
                Cancel
              </Link>
            </form>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Buy Product</h2>
            <center>
              <img src="https://capston-crm.s3.ap-south-1.amazonaws.com/mobile2.png" />
            </center>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Product Name" className="form-label">
                  <h4>Product Name</h4>
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Product name"
                  name="pname"
                  value={pname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Rating" className="form-label">
                  <h4>Rating</h4>
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter Rating"
                  name="rating"
                  value={rating}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  <h4>Price</h4>
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter price"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Checkout
              </button>
              &nbsp;
              <Link
                onClick={() => addToCart(user)}
                className="btn btn-outline-primary"
                
              >
                Add to Cart
              </Link>
              &nbsp;
              <Link className="btn btn-outline-danger mx-2" to="/products">
                Cancel
              </Link>
            </form>
          </div>
        </div> */
}
