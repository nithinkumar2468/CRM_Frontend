import {useState} from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
function SearchBar({setResults}) {
    const[input,setInput]=useState("");

    const fetchData=(value)=>{
        fetch("http://localhost:8080/products")
        .then((response)=>response.json())
        .then((json)=>{
            const results=json.filter((user)=>{
                return value && user && user.pname && user.pname.toLowerCase().includes(value);
            });
            setResults(results);
        });
    }
    const handleChange=(value)=>{
        setInput(value);
        fetchData(value);
    }
    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="search" 
            value={input}
            onChange={(e)=>handleChange(e.target.value)}/>
        </div>
    )
} 
export default SearchBar;