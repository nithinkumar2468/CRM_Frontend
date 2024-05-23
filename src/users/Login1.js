import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Captcha } from "./Captcha";
import { message } from "antd"


const Login1 = () => {
  const handleClickL = () => navigate("/");

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [showAlert,setShowAlert]=useState(false);
  async function usermenu(event) {
    event.preventDefault();

    window.localStorage.setItem("isLoggedIn", email);
    console.log(window.localStorage.getItem("isLoggedIn"));

    try {
      await axios
        .post("https://stscrmbackend-production.up.railway.app/api/n1/users/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "email not exist") {
              alert("email not exist");
            } else if (res.data.message === "Login Success") {
              navigate("/usermenu", {
                state: { email: email, password: password },
              });
              setTimeout(() => {
                message.success("Login Successful")
              }, 2000);
            } else {
              /* alert("Incorrect email or Password"); */
              setTimeout(() => {
                setShowAlert(true)
                message.error("Login Failed");
              }, 2000);
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="./images/jira.png"
            alt="Your Company"
            style={{ height: "80px", maxWidth: "150px", borderRadius: "8px" }}
          />
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h1>
        </div>
{/* {showAlert&&
<Alert type="error" message='error' description="There was an error on login"/>} */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <h3>Email address</h3>
                </label>
              </div>
              <div className="input-group mb-3">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  className="form-control"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <h3>Password</h3>
                </label>
              </div>
              <div className="input-group mb-3">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="form-control"
                />
              </div>
            </div>
            <Captcha />

            <div>
              <button
                type="submit"
                onClick={usermenu}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login as User
              </button>
            </div>
          </form>
          <form>
            <p className="mt-10 text-center text-sm text-gray-500">
              <button
                type="submit"
                onClick={handleClickL}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Previous
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login1;

{
  /*import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import UserMenu from "./UserMenu";

export default function Login() {
    const navigate = useNavigate();
  
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/usermenu');
      };
    

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login User</h2>

          <form >

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
               
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                               
              />
            </div>
            <button onClick={navigateHome}>Submit</button>
            <Routes>
          
          <Route path="/usermenu" element={<UserMenu />} />
        </Routes>
          </form>
        </div>
      </div>
    </div>
  );
}

*/
}
