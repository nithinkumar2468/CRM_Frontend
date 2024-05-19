import React, { useEffect, useState ,useRef} from "react";
import axios from "axios";
import Navbar2 from "./Navbar2";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function ViewProducts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = fetch("http://localhost:8080/api/n1/products")
    .then(res=>res.json())
    .then(data=>
    setUsers(result.data));
  };

  const deleteUser = async (id) => {
    window.alert("Do you want to delete the product");
    await axios.delete(`http://localhost:8080/api/n1/product/${id}`);
    loadUsers();
  };

  const gridRef=useRef();
  const [rowData,setRowData]=useState([]);
  const [columnDefs,setColumnDefs]=useState([
    {field:'id',width:'100px'},
    {field:'pname',width:'800px'},
    {field:'rating',width:'100px'},
    {field:'price',width:'100px'},
    {field:'brand'},
    {field:'Edit'}
  ])

  useEffect(()=>{
    fetch("http://13.126.103.91:8080/api/n1/products")
    .then(res=>res.json())
    .then(data=>setRowData(data));
  },[]);

  

  return (
    <div>
      <Navbar2/>
    <div className="py-20 container">
      <div className="py-4">

        <div className={"ag-theme-alpine"} style={{ width: '1400px', height: '800px' }}>
        <AgGridReact ref={gridRef}
        rowData={rowData}
        animateRows={true}
        columnDefs={columnDefs}
      />
        </div>


        {/* <table className="table border shadow">
          <tbody>
            {users.map((user) => (
              
              <tr>
                <td><img src={`https://crmproduct.s3.ap-south-1.amazonaws.com/${user.pname.toLowerCase().replace(/\s/g,'').slice(0,16)}.webp`}
                        style={{width:"200px",height:"200px"}} alt="mobile"/></td>
                <td><h5>{user.pname}</h5>
                <h6 align="left">{user.rating}</h6><br></br>
                
                <h5 align="left" width= "25px" float= "left">M.R.P.:&nbsp; ₹{user.price}/-</h5>
                </td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editproduct/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
    </div>
  );
}