import React from "react";
import "./Searchlist.css";
import { Link } from "react-router-dom";

function Searchlist({ users }) {
    return (
        <div className="searchlist">
            {users.map((user) => (
                <Link key={user.id} to={`/buynowproduct/${user.id}`} style={{ textDecoration: 'none' }}>
                    {user.pname.slice(0, 30)}
                </Link>
            ))}
        </div>
    );
}

export default Searchlist;
