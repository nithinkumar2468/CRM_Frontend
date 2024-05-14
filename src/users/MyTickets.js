import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";
import moment from 'moment';

export default function MyAddress() {

  const useremail = window.localStorage.getItem("isLoggedIn");
  console.log(useremail);

  const [useraddress, setUserAddress] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/n1/${useremail}/tickets`)
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          const dateA = new Date(moment(a.raiseddate, "DD MMM YYYY HH:mm a").toDate());
          const dateB = new Date(moment(b.raiseddate, "DD MMM YYYY HH:mm a").toDate());
  
          return dateB - dateA;
        });
        setUserAddress(data);
      });
  }, []);

  return (
    <div>
      <Navbar1 />
      <div className="py-20 container">
        <div className=" py-10 row">
          <div className="col offset-md-20 border rounded p-4 mt-2 shadow">

            <div>
                <div style={{float: "left", width: "90%","textAlign":"center"}}><h2>Tickets</h2>
                <hr></hr>
            </div>
            <div style={{float: "right", width: "10%"}}>
                <Link
                    className="btn btn-outline-primary mx-2"
                    to={"/enquiry"}
                  >
                    Raise Ticket
                  </Link>
                  <hr></hr>
                </div>
            </div>
            
        <table className="table border shadow table table-hover">
          <thead>
            <tr>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Ticket Id</th>
              
              {/* <hr style={{borderLeft:" 10px solid black",height: "50px"}}></hr> */}
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Logged Time</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Name</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Email</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Issue</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Status</th>
            </tr>
          </thead>
          <tbody>
          {useraddress.length > 0 ? (
              useraddress.map((item,index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                  {item.tid}
                </th>
                <td>{item.raiseddate}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.issue}</td>
                <td>{item.status}</td>
              </tr>
            ))):(
                <h2 style={{color:"#cc3300",textAlign:"center"}}>No Tickets to display..!</h2>
              )}
          </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
  );
}
