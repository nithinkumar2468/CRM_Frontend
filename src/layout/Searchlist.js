import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Searchlist.css";
import { Link } from "react-router-dom";

function Searchlist({ result }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const results = await axios.get("https://stscrmbackend-production.up.railway.app/api/n1/products");
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

/* import "./Searchlist.css";
function Searchlist({result}){
    return(
        <div className="searchlist" onClick={(e)=>alert(`You Clicked on ${result.p_name}`)}>
            {result.p_name}
        </div>
    )
}
export default Searchlist; */