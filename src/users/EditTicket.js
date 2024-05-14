import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditTicket() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        email: "",
        issue: "",
        status: "",
    });

    const { name, email, issue, status } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/n1/ticket/${id}`, user);
        navigate("/ticket");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/n1/ticket/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Ticket</h2>

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
                                value={user.username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Issue
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your issue"
                                name="issue"
                                value={user.issue}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">
                                status
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="status"
                                name="status"
                                value={status}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/ticket">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
