import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar1";
import moment from 'moment';


export default function MyPurchase() {

  const useremail = window.localStorage.getItem("isLoggedIn");
  console.log(useremail);

  const [orders, setOrders] = useState("");

  useEffect(() => {
    fetch(`https://stscrmbackend-production.up.railway.app/api/n1/${useremail}/orders`)
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          const dateA = new Date(moment(a.ordereddate, "DD MMM YYYY HH:mm a").toDate());
          const dateB = new Date(moment(b.ordereddate, "DD MMM YYYY HH:mm a").toDate());
  
          return dateB - dateA;
        });
        setOrders(data);
      });
  }, []);

  return (
    <div>
      <Navbar1 />
      <div className="py-20 container">
        <div className=" py-10 row">
          <div className="col md-20 border rounded p-4 mt-2 shadow">
            <h2 style={{"textAlign":"center"}}>Orders</h2>
            <hr></hr>
            <table className="table border shadow table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Order Id
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Purchased Date
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" ,textAlign:"center"}}>
                    Product Name
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Total Amount
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((item, index) => (
                    <tr>
                      <th scope="row" key={index}>
                        {item.orderid}
                      </th>
                      <td>{item.ordereddate}</td>
                      <td>{item.pname}</td>
                      <td>{item.totalprice}</td>
                      <td>{item.address}</td>
                    </tr>
                  ))
                ) : (
                  <h2 style={{color:"#cc3300",textAlign:"center"}}>Please Goto Our Products Page..!</h2>

                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
