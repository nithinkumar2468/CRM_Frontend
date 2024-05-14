import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Searchlist.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function Searchlist({ result }) {
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const results = await axios.get("http://localhost:8080/products");
        setUsers(results.data);
        
    };
    return (
        <div className="searchlist" >
            {users.map((user, index) => (
            <Link to={`/buynowproduct/${result.id}`} style={{"textDecoration":'none'}}>
                {result.pname}
            </Link>
            ))}
        </div>
    )
}
export default Searchlist;