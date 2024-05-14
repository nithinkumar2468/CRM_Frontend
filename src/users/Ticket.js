import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams ,useNavigate} from "react-router-dom";
import Navbar2 from "./Navbar2";
import moment from "moment";
import { message } from "antd";

export default function Ticket() {
  let navigate=useNavigate();
  const [users, setUsers] = useState([]);

  const token = window.localStorage.getItem("jwttoken");
  console.log(token);

  const { tid } = useParams();

  useEffect(() => {
    loadUsers();
    isTokenExpired(2000);
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/n1/tickets`);
    console.log(token);
    result.data.sort((a, b) => {
      const dateA = new Date(
        moment(a.raiseddate, "DD MMM YYYY HH:mm a").toDate()
      );
      const dateB = new Date(
        moment(b.raiseddate, "DD MMM YYYY HH:mm a").toDate()
      );

      return dateB - dateA;
    });
    setUsers(result.data);
  };

  const deleteUser = async (tid) => {
    await axios.delete(`http://localhost:8080/user/${tid}`);
    loadUsers();
  };

  const isTokenExpired = () => {
    try {
      setTimeout(() => {
        navigate("/");
        message.success("Session Invalidated..! "+"Please login ")
      },20000);                         //20 seconds
      return;
    } catch (error) {
      return true;
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="py-20 container">
        <div className="py-4">
          <table className="table border shadow">
            <thead style={{ backgroundColor: "#66b3ff" }}>
              <tr>
                <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                  Ticket Id
                </th>
                <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                  Raised Date
                </th>
                <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                  Mail-Id
                </th>
                <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                  Issue
                </th>
                <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                  Status
                </th>
                <th
                  scope="col"
                  style={{ backgroundColor: "#66b3ff", textAlign: "center" }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                    {user.tid}
                  </th>
                  <td>{user.raiseddate}</td>
                  <td>{user.email}</td>
                  <td>{user.issue}</td>
                  <td>{user.status}</td>
                  <td style={{ textAlign: "center" }}>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewticket/${user.tid}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editticket/${user.tid}`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
