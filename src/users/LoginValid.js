import React, {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const LoginValid = () => {

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/n2/admin/login", {
                email: email,
                password: password,

            }).then((res) => {
                console.log(res.data);

                if (res.data.message === "email not exist") {
                    alert("email not exist");
                }
                else if (res.data.message === "Login Success") {
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
        <section class="bg-white dark:bg-gray-900">
            
            <div class="container px-6 py-12 mx-auto">
                <div class="lg:flex lg:items-center lg:-mx-6">
                    <div class="mt-8 lg:w-1/2 lg:mx-6">
                        <div
                            class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 class="text-lg font-medium text-gray-700">User Login</h1>

                            <form class="mt-6">
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">UserName</label>
                                    <input type="text" placeholder="Enter your Username" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={email}
                                        onChange={(event) => {
                                            setemail(event.target.value);
                                        }}
                                    //onChange={(e) => onInputChange(e)}
                                    />
                                </div>

                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input type="password" placeholder="Enter your password." class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }
                                        }
                                    //onChange={(e) => onInputChange(e)}
                                    />
                                </div>

                                <button type="submit" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={login}>
                                    Login
                                </button>
                                <Link className="btn btn-outline-danger mx-2" to="/">
                                    Cancel
                                </Link>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default LoginValid;
