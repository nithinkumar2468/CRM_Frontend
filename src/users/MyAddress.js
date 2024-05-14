import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar1 from "./Navbar1";
import axios from "axios";
import "reactjs-popup/dist/index.css";

export default function MyAddress() {
  let navigate = useNavigate();
  const { taskid } = useParams();

  const [option, setOption] = useState("Default");

  const toggleMode = (param) => (event) => {
    setOption(param);
  };

  useEffect(() => {
    setData({ ...data, name: option });
  }, [option]);

  const [data, setData] = useState({
    number: "",
    name: `${option}`,
  });
  const { number } = data;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [task, setTask] = useState("");
  useEffect(() => {
    fetchdata();
  }, [option]);
    const fetchdata = async () => {

      if(option===null || option ==="Default")
      {
        const response = await axios.get(
          `http://localhost:8080/api/n1/getall`
        );
        setTask(response.data);
      }
      else{
        const response = await axios.get(
          `http://localhost:8080/api/n1/getall/${option}`
        );
        setTask(response.data);
        }  
    };
    /* fetchdata(); */
  

  const [element, setElement] = useState("");

  const filterButton = (param) => (event) => {
    setElement(param);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.info(data);
    await axios.post("http://localhost:8080/api/n1/post", data);
    await fetchdata();
  };
  /* const [update, setUpdate] = useState({
    name2: `${option}`,
    number2: "",
  });

  const {  number2 } = update;

  const onInputChange2 = (e) => {
    setUpdate(e.target.value);
  };
  

  console.info(update);
  const onSubmit2 = async () => {
    await axios.put(`http://localhost:8080/put/${element.taskid}`, data);
  }; */

  return (
    <div>
      <Navbar1 />
      <div className="py-20 container">
        <div className="py-10 row">
          <div className="col offset-md-20 border rounded p-4 mt-2 shadow">
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;Filter</h2>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                mode="endpoint serial number"
                option={option}
                onClick={(e) => toggleMode("ENDPOINT SERIAL NUMBER")(e)}
              ></input>
              <h4>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  ENDPOINT SERIAL NUMBER
                </label>
              </h4>
              <br></br>
              <input
                className={`form-check-input`}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={(e) => toggleMode("ENDPOINT IP")(e)}
              ></input>
              <h4>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  ENDPOINT IP
                </label>
              </h4>
              <br></br>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={(e) => toggleMode("ENDPOINT MAC")(e)}
              ></input>
              <h4>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  ENDPOINT MAC
                </label>
              </h4>
            </div>
          </div> 

{/* {option===null||option==="Default"?<p></p>: */}
           <div className={`col offset-md-20 border rounded p-4 mt-2 shadow`}>
            <h3>{option}</h3>
            <br></br>
            <div className="input-group mb-3">
              <input
                type={"number"}
                className="form-control"
                name="number"
                value={number}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <br></br>
            <button
              onClick={onSubmit}
              type="submit"
              className="btn btn-outline-primary"
            >
              Submit
            </button>
          </div> 


          <div className={`col offset-md-20 border rounded p-4 mt-2 shadow`}>
            <div>
              {task.length > 0 ? (
                task.map((item, index) => (
                  <div className="card-body">
                    <ul className="list-group l ist-group-flush">
                      <button onClick={(e) => filterButton(item)(e)}>
                        <h3>Filter{index + 1}</h3>
                      </button>
                    </ul>
                  </div>
                ))
              ) : (
                <h2 style={{ color: "#cc3300", textAlign: "center" }}>
                  Empty..!
                </h2>
              )}
            </div>
          </div>
        </div>
        <div>
          {element.name != null ? (
            <p>
              <h3>{element.name}</h3>
              Previous Value : {element.number}
              <br></br>
              <br></br>
              <Link
                className="btn btn-outline-primary mx-2"
                to={`/myaddress2/${element.taskid}`}
              >
                Edit Value
              </Link>
            </p>
          ) : (
            <p></p>
          )}
          {/* <div><h4>Filter</h4>
            <Popup trigger=
                {<div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    mode="endpoint serial number"
                    option={option}
                    onClick={(e) => toggleMode("ENDPOINT SERIAL NUMBER")(e)}
                  ></input>
                  <h4>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      ENDPOINT SERIAL NUMBER
                    </label>
                  </h4>
                  <br></br>
                  <input
                    className={`form-check-input`}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={(e) => toggleMode("ENDPOINT IP")(e)}
                  ></input>
                  <h4>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      ENDPOINT IP
                    </label>
                  </h4>
                  <br></br>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={(e) => toggleMode("ENDPOINT MAC")(e)}
                  ></input>
                  <h4>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      ENDPOINT MAC
                    </label>
                  </h4>
                </div>
              </div>}
                position=" center">
                <div><div className="">
            <h3>{option}</h3>
            <br></br>
            <div className="input-group mb-3">
              <input
                type={"number"}
                className="form-control"
                name="number"
                value={number}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <br></br>
            
          </div></div>
          <button
              onClick={onSubmit}
              type="submit"
              className="btn btn-outline-primary"
            >
              Submit
            </button>
            </Popup>
        </div>
 */}
          

          {/* Update Value :
          <div className="input-group mb-3">
            <input
              type={"number"}
              className="form-control"
              name="number2"
              value={number2}
              onChange={(e) => onInputChange2(e)}
            />
          </div>
          <br></br>
          <button
            onClick={onSubmit2}
            type="submit"
            className="btn btn-outline-primary"
          >
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
}
