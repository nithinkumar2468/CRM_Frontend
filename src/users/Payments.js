import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Payments = () => {
  const navigate = useNavigate();

  const useremail = window.localStorage.getItem("isLoggedIn");

  const location = useLocation();

  const { id } = useParams();

  var savings = 1500;

  let cart = [];
  cart=location.state.cartItems;

  let name=null;

  let deliveraddress=null;

  if(location.state.pname === undefined || location.state.pname === null){
name=cart.map((item)=>item.pname);
  }
  else{
    name=location.state.pname;
  }
  


  const [order, setOrder] = useState({
    pname:`${name}`,
    email: `${useremail}`,
    totalprice: `${location.state.price}`,
    address: "",
  });
  const { pname,email, totalprice, address } = order;

  const onInputChange = (e) => {
    var checkBox = document.getElementById("data").innerHTML;
    console.log(checkBox);
    
    /* setOrder({ ...order, [e.target.name]: e.target.value }); */
    
  };

  const onSubmit = async (e) => {
    e.preventDefault();
     await axios.post(`https://stscrmbackend-production.up.railway.app/api/n1/${useremail}/order`,order);

    navigate("/paymentdone");
  };

  const [useraddress, setUserAddress] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/n1/${useremail}/addresses`)
      .then((res) => res.json())
      .then((data) => setUserAddress(data));
  }, []);

  let price = 0;

  if (location.state.price > 10000) {
    price = 0;
  } else {
    price = 199;
  }
  return (
    <div style={{ marginTop: "0px", marginLeft: "20px", marginRight: "20px" }}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="py-10">
          
            <div
              className="card"
              style={{
                backgroundColor: "#f0f2f2",
                width: "100%",
                height: "80px",
              }}
            >
              <h1>
                <center>Checkout</center>
              </h1>
            </div>
            <hr></hr>
            <div style={{ float: "left", width: "70%" }}>
              <div style={{ height: "auto" }}>
                <div style={{ float: "left", width: "100%" }}>
                  <h3>1 &nbsp;&nbsp;Product Info</h3>
                </div>
                <br></br>
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    paddingLeft: "80px",
                  }}
                >                    
                  <h5 style={{ color: "#cc3300" }}>
                  {
                      location.state.pname === undefined || location.state.pname === null ? (
                        <span>{cart.map((item,index)=>(
                          <div>{index+1})&nbsp;&nbsp;&nbsp;&nbsp;{item.pname}</div>
                        ))}</span>
                        
                      ) : 
                        <span>{location.state.pname}</span>
                    }
                  </h5>
                </div>
              </div>
              <hr></hr>

  {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
  <div style={{ height: "auto" }}>
              <h3>2 &nbsp;&nbsp;Delivery address</h3>
    <div className="card"style={{margin: "20px",padding: "20px", backgroundColor: "#f0f2f2"}}>
                <div className="card-body">


                  <div>
                        <div style={{"float":"left"}}>
                           <h3 style={{ color: "#cc3300" }}>Your addresses</h3>
                        </div>
                        <div>
                               <Link
                    className="btn btn-outline-primary mx-2"
                    to={"/newaddress"}
                                   >
                    + Add address
                              </Link>
                        </div> 

                  </div>


                  <hr></hr>
                  <div class="form-check">
                  {useraddress.length > 0 ? (
                      useraddress.map((item,index) => (
                        <>
                  <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    onClick={(e)=>onInputChange(e)}
                    
                    />
                    <h4>
                      <label class="form-check-label" for="flexRadioDefault1">
                      <p id="data">{item.name}  , {item.landmark}, {item.area} , {item.pincode} ,{item.state} , {item.country}..</p>
                      </label>
                    </h4>
                    </>
                     ))
                     ) : (
                       <h2>Address is Empty..!</h2>
                     )}
                  </div>
                </div>
    </div>
  </div>

{/* ////////////////////////////////////////////////////////////////////////// */}
              <hr></hr>
              <h3>3 &nbsp;&nbsp;Select a payment method</h3>
              <hr></hr>

              <div
                className="card"
                style={{
                  margin: "20px",
                  padding: "20px",
                  backgroundColor: "#f0f2f2",
                }}>
                <div className="card-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    ></input>
                    <h4>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Credit or debit card
                      </label>
                    </h4>
                    <div>
                      <table>
                        <tr>
                          <td>
                            <img
                              src="./images/visa.png"
                              alt="visa"
                              style={{
                                height: "70px",
                                maxWidth: "70px",
                                borderRadius: "10px",
                              }}
                            />
                          </td>
                          <td>
                            <img
                              src="./images/master.jpg"
                              alt="master"
                              style={{
                                height: "70px",
                                maxWidth: "70px",
                                borderRadius: "10px",
                              }}
                            />
                          </td>
                          <td>
                            <img
                              src="./images/bajajfinsery.png"
                              alt="bajaj"
                              style={{
                                height: "100px",
                                maxWidth: "200px",
                                borderRadius: "10px",
                              }}
                            />
                          </td>
                          <td>
                            <img
                              src="./images/rupay.png"
                              style={{
                                height: "80px",
                                maxWidth: "80px",
                                borderRadius: "10px",
                              }}
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                    <br></br>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    ></input>
                    <h4>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Net banking
                      </label>
                    </h4>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <select
                        name="cars"
                        id="cars"
                        style={{
                          backgroundColor: "aliceblue",
                          width: "300px",
                          height: "40px",
                          fontFamily: "serif",
                          fontSize: "20px",
                        }}
                      >
                        <option value="null">Choose a Payment Option</option>
                        <option value="sbi credit card">Sbi Credit Card</option>
                        <option value="icici credit card">
                          ICICI Credit Card
                        </option>
                        <option value="kotak credit card">
                          Kotak Credit Card
                        </option>
                        <option value="sbi debit card">Sbi Debit Card</option>
                      </select>
                    </div>
                    <br></br>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    ></input>
                    <h4>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Other UPI apps
                      </label>
                    </h4>
                    <div>
                      <table>
                        <tr>
                          <td>
                            <img
                              src="./images/paytm.png"
                              alt="paytm"
                              style={{
                                height: "80px",
                                maxWidth: "80px",
                                borderRadius: "8px",
                              }}
                            />
                          </td>
                          <td>
                            <img
                              src="./images/phonpe2.png"
                              alt="phonpe"
                              style={{
                                height: "80px",
                                maxWidth: "80px",
                                borderRadius: "80px",
                              }}
                            />
                          </td>
                          <td>
                            <img
                              src="./images/gpay.png"
                              alt="gpay"
                              style={{
                                height: "80px",
                                maxWidth: "80px",
                                borderRadius: "8px",
                              }}
                            />
                          </td>
                          <td>
                            <img
                              src="./images/apay.png"
                              alt="apay"
                              style={{
                                height: "80px",
                                maxWidth: "100px",
                                borderRadius: "10px",
                              }}
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ float: "right", width: "30%" }}>
              <div
                className="card"
                style={{
                  justify: "center",
                  margin: "30px",
                  padding: "10px",
                  backgroundColor: "#f0f2f2",
                }}
              >
                <div
                  className="card-body"
                  style={{ width: "400px", height: "500px", padding: "10px" }}
                >
                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buy Now
                  </button>

                  <br></br>
                  <center>
                    Choose a payment method to continue checking out. You will
                    still have a chance to review and edit your order before it
                    is final.
                  </center>
                  <hr></hr>
                  <h3>Order Summary</h3>
                  <br></br>
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <label
                          htmlFor="amount"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          <h4>Items</h4>
                        </label>
                      </div>
                      <div class="col">
                        <div>
                          <h4>
                            <table>
                              <tr>
                                <td style={{ textAlign: "right" }}>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹
                                  {location.state.price}.00
                                </td>
                              </tr>
                            </table>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <label
                          htmlFor="delivery"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          <h4>Delivery Fee</h4>
                        </label>
                      </div>
                      <div class="col">
                        <div>
                          <h4>
                            <table>
                              <tr>
                                <td>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹
                                  {price}.00
                                </td>
                              </tr>
                            </table>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div
                      class="row"
                      style={{ backgroundColor: "#f0f2f2", height: "50px" }}
                    >
                      <div class="col">
                        <label
                          htmlFor="ordertotal"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          <h3 style={{ color: "#cc3300" }}>Order Total</h3>
                        </label>
                      </div>
                      <div class="col">
                        <div style={{ color: "#cc3300" }}>
                          <h2>
                            <table>
                              <tr>
                                <td>
                                  &nbsp;&nbsp;&nbsp;&nbsp;₹
                                  {price + location.state.price}.00
                                </td>
                              </tr>
                            </table>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <h5 style={{ color: "#cc3300" }}>
                      Your Savings: ₹{savings}.00 (5%)
                    </h5>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};
export default Payments;
