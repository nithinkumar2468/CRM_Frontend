import React,{useState} from "react";
import Navbar1 from "./Navbar1";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewAddress() {

    let navigate=useNavigate();

    const useremail = window.localStorage.getItem("isLoggedIn");
  console.log(useremail);


    const [address, setAddress] = useState({
        name: "",
        number: "",
        pincode: "",
        area: "",
        landmark: "",
        state: "",
        country: "",
      });
    
      const { name, number, pincode, area, landmark, state, country } = address;
    
      const onInputChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(
          `http://localhost:8080/api/n1/${useremail}/address`,
          address
        );
        navigate("/myaddress");
      };

  return (
    <div>
      <Navbar1 />
      <div className="py-20 container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center ">Address</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your mobile number"
                  name="number"
                  value={number}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pincode" className="form-label">
                  Pincode
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter your Pincode"
                  name="pincode"
                  value={pincode}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="area" className="form-label">
                  Area
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your area in-detailed"
                  name="area"
                  value={area}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="landmark" className="form-label">
                  Landmark
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Landmark"
                  name="landmark"
                  value={landmark}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your State"
                  name="state"
                  value={state}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your country"
                  name="country"
                  value={country}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/usermenu">
                Cancel
              </Link>
            </form>




          </div>
        </div>
      </div>
    </div>
  );
}
