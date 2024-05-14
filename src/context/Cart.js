import React, { useState } from "react";
import { useCart } from "./ContextCart";
import Navbar1 from "../users/Navbar1";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let navigate = useNavigate();

  const { cartItems, addToCart, removeFromCart } = useCart();

  console.log(cartItems);
  var sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i].price);
    sum += cartItems[i].price;
  }
  /* const items=cartItems.map(e=>console.log(e.price+sum)); */

  const onSubmit = async (e) => {
    e.preventDefault();
    navigate("/payments", {
      state: { cartItems, price: sum },
    });
  };

  return (
    <div
      className="py-20"
      style={{ height: "100%", backgroundColor: "aliceblue" }}
    >
      <>
        <Navbar1 />
        <div className="py-10">
          <div
            style={{
              float: "left",
              width: "70%",
              backgroundColor: "aliceblue",
              padding: "20px",
              height: "100%",
            }}
          >
            <h1 style={{ color: "#cc3300" }}>
              Shopping Cart<br></br>
            </h1>

            <hr></hr>
            <br></br>
            {cartItems.length === 0 ? (
              <h3>
                <p style={{ textAlign: "center" }}>Your Cart is Empty</p>
              </h3>
            ) : 
            (
              <div className="container">
                <table className="table border shadow">
                  <tbody border="5px">
                    {cartItems.map((item) => (
                      <tr>
                        <td>
                          <img
                            src={`https://crmproduct.s3.ap-south-1.amazonaws.com/${item.pname.toLowerCase().replace(/\s/g,'').slice(0,16)}.webp`}
                            width="800%"
                          />
                        </td>

                        <td>
                          <h4>{item.pname}</h4>
                          <br></br>
                          <h5 align="left" width="25px" float="left">
                            Rating:&nbsp;&nbsp;{item.rating}
                          </h5>
                          <br></br>
                          <br></br>
                          <center>
                            <h3 style={{ color: "#cc3300" }}>
                              M.R.P.:&nbsp;₹{item.price}/-
                            </h3>
                          </center>
                        </td>

                        <td>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <h5>
                            <button
                              className="btn btn-outline-primary mx-2"
                              onClick={() => removeFromCart(item)}
                            >
                              Remove From Cart
                            </button>
                          </h5>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div
            style={{
              float: "right",
              width: "30%",
              backgroundColor: "aliceblue",
              padding: "50px",
            }}
          >
            <span style={{ display: "flex" }}>
              <IoCheckmarkDoneCircleOutline size="60px" color="green" />
              &nbsp;
              <h4>
                Part of your order qualifies for FREE Delivery. Select this
                option at checkout.
              </h4>
            </span>
            <hr></hr>
            <h3>
              Subtotal ({cartItems.length} items): ₹{sum}.00
            </h3>
            <br></br>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onSubmit}
            >
              <h3> Proceed to Buy</h3>
            </button>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="card">
              <div className="card-body">
                <div className="card-header">
                  <div className="card-title">
                    <h3 style={{ color: "0f2f3f" }}>EMI Available</h3>
                  </div>
                </div>
                <h4 style={{ color: "5b3e2b", padding: "20px" }}>
                  Your order qualifies for EMI with valid credit cards (not
                  available on purchase of Gold, Jewelry, Gift cards and Amazon
                  pay balance top up). Learn more
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Cart;

{
  /* <h1 style={{ color: "#cc3300" }}>
            <center>Shopping Cart</center>
            Total Price: {sum}   Length:{cartItems.length}
          </h1>
          {cartItems.length === 0 ? (
            <h3>
              <p style={{ textAlign: "center" }}>Your Cart is Empty</p>
            </h3>
          ) : (
            <div className="container">
              <table className="table border shadow">
                <tbody border="5px">
                  {cartItems.map((item) => (
                    <tr>
                      <td>
                        <img
                          src="https://capston-crm.s3.ap-south-1.amazonaws.com/mobile2.png"
                          width="800%"
                        />
                      </td>

                      <td>
                        <h4>{item.pname}</h4>
                        <br></br>
                        <h5 align="left" width="25px" float="left">
                          Rating:&nbsp;&nbsp;{item.rating}
                        </h5>
                        <br></br>
                        <br></br>
                        <center>
                          <h3 style={{ color: "#cc3300" }}>
                            M.R.P.:&nbsp;₹{item.price}/-
                          </h3>
                        </center>
                      </td>

                      <td>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h5>
                          <button
                            className="btn btn-outline-primary mx-2"
                            onClick={() => removeFromCart(item)}
                          >
                            Remove From Cart
                          </button>
                        </h5>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */
}
