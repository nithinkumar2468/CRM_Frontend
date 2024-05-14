import { useNavigate } from "react-router-dom";
import React, {useState } from "react";
import axios from "axios";
import { Captcha } from "./Captcha";
const Login2 = () => {
    /* const navigate = useNavigate(); */
    const handleClickL = () => navigate('/');
    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    async function admin(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/n1/login", {
                email: email,
                password: password,

            }).then((res) => {
                console.log(res.data.jwttoken);
                window.localStorage.setItem("jwttoken",res.data.jwttoken);
                

                if (res.data.message === "email not exist") {
                    alert("email not exist");
                }
                else if (res.data.message !=null||res.data.message===undefined) {
                    navigate('/admin');
                }
                else {
                    alert("Incorrect email or Password");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
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
                        style={{ height:'80px',maxWidth:'150px', borderRadius: '8px' }}
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required

                                    onChange={(event) => {
                                        setemail(event.target.value);
                                    }}

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                {/* <div className="text-sm">
                                    <a href="/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required

                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }
                                    }

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                            </div>
                        </div>
                        <Captcha/>


                        <div>
                            <button
                                type="submit"
                                onClick={admin}
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login as Admin
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
    )
}
export default Login2;