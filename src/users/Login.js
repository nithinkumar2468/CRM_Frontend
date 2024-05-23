import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobileno: "",
        password: "",
        retypepassword: "",
    });

    const [userErrors, setUserErrors] = useState({
        name: "",
        email: "",
        mobileno: "",
        password: "",
        retypepassword: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const validateUser = () => {
        const errors = {};

        if (!user.name.trim()) {
            errors.name = "Full Name is required";
        }

        if (!user.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = "Invalid email format";
        }

        if (!user.mobileno.trim()) {
            errors.mobileno = "Mobile is required";
        } else if (!/^\d{10}$/.test(user.mobileno)) {
            errors.mobileno = "Invalid mobile number";
        }


        if (!user.password.trim()) {
            errors.password = "Password is required";
        } else if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                user.password
            )
        ) {
            errors.password =
                "Password must contain at least 8 characters, including at least one letter, one number, and one special character";
        }

        if (!user.retypepassword.trim()) {
            errors.retypepassword = "Confirm Password is required";
        } else if (user.password !== user.retypepassword) {
            errors.retypepassword = "Passwords do not match";
        }

        setUserErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateUser();

        if (isValid) {
            try {
               const response = await axios.post("https://stscrmbackend-production.up.railway.app/api/n1/user", user);

                const responseData = response && response.data;

                setSuccessMessage("Registration successful");

                setUser({
                    name: "",
                    email: "",
                    mobileno: "",
                    password: "",
                    retypepassword: "",
                });
                setUserErrors({});
                setErrorMessage("");
                const userdata = await axios.get("http://localhost:8080/api/n1/users");
                console.log(userdata.data.name)

            } catch (error) {
                setErrorMessage("Error during registration. Please try again.");
                setSuccessMessage("");
            } finally {
                navigate("/login1");
            }
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="username" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter your Full Name"
                                    value={user.name}
                                    onChange={onInputChange}
                                />
                                <span className="text-red-500">{userErrors.name}</span>
                            </div>
                            <div>
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your Email"
                                    value={user.email}
                                    onChange={onInputChange}
                                />
                                <span className="text-red-500">{userErrors.email}</span>
                            </div>
                            <div>
                                <label htmlFor="mobileno" className="form-label">
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    id="mobileno"
                                    name="mobileno"
                                    className="form-control"
                                    placeholder="Enter your Mobile Number"
                                    value={user.mobileno}
                                    onChange={onInputChange}
                                />
                                <span className="text-red-500">{userErrors.mobileno}</span>
                            </div>
                            <div>
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter your Password"
                                    value={user.password}
                                    onChange={onInputChange}
                                />
                                <span className="text-red-500">{userErrors.password}</span>
                            </div>
                            <div>
                                <label htmlFor="confirm_Password" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="retypepassword"
                                    name="retypepassword"
                                    className="form-control"
                                    placeholder="Confirm your Password"
                                    value={user.retypepassword}
                                    onChange={onInputChange}
                                />
                                <span className="text-red-500">{userErrors.retypepassword}</span>
                            </div>
                            <div><br></br></div>
                            <button
                                type="submit"
                                className="btn btn-outline-primary"
                            >
                                Submit
                            </button>
                            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                            <Link className="btn btn-outline-danger mx-2" to="/">
                                Cancel
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;
