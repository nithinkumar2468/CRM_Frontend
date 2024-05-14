import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MyAddress2() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [data, setData] = useState({
        name: "",
        number: "",
    });

    const { name, number } = data;

    const onInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadData();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/n1/put/${id}`, data);
        navigate("/myaddress");
    };

    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/api/n1/get/${id}`);
        setData(result.data);
    };

  return (
    <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Product Name" className="form-label">
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
                            <label htmlFor="price" className="form-label">
                                Previous Value
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter price"
                                name="number"
                                value={number}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}
