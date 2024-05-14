import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar1 from "./Navbar1";
import SearchBar from "../layout/SearchBar";
import SearchResults from "../layout/SearchResults";
import Select from "react-select";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Chatbot from "./Chatbot";
import { useDispatch } from "react-redux";
import { incrementcart ,decrementcart} from "../Redux/Reducer";

export default function Products() {

  const dispatch=useDispatch();

  const [users, setUsers] = useState([]);

  const [results, setResults] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/n1/products");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  //////////////////////////////////////////////////////////////////
  const [product, setProducts] = useState([]);
  const [selectedState, setselectedState] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/n1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const states = Array.from(new Set(product.map((res) => res.brand)));
  const stateoptions = states.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const filterStates = selectedState
    ? product.filter((product) => product.brand === selectedState.value)
    : product;
  console.log(filterStates);
  ////////////////////////////////////////////////////////////////

  return (
    <section class="py-20">
      <div>
        <Navbar1 />
        <div className="container">
          <div className="py-4">
            <Chatbot />
            <table>
              <tbody>
                <tr>
                  <td style={{ width: "600px", "padding-right": "300px" }}>
                    <div className="" style={{ "border-radius": "400px" }}>
                      <Select
                        options={stateoptions}
                        isClearable
                        placeholder="Filter"
                        onChange={(selectOption) =>
                          setselectedState(selectOption)
                        }
                        value={selectedState}
                      />
                    </div>
                  </td>
                  <td style={{ width: "400px" }}>
                    <h2> Mobiles</h2>
                   
                  </td>
                  <td>
                    <SearchBar setResults={setResults} />
                  </td>
                </tr>
              </tbody>
            </table>

            <SearchResults results={results} />
            <table className="table border shadow table table-hover">
              <tbody border="5px">
                {filterStates.map((item,index) => (
                  <tr>
                    <td>
                      <img
                        src={`https://crmproduct.s3.ap-south-1.amazonaws.com/${item.pname.toLowerCase().replace(/\s/g,'').slice(0,16)}.webp`}
                        style={{width:"200px",height:"200px"}}
                      />
                    </td>
                    
                    <td>
                      <h5>{item.pname}</h5>
                      <br></br>
                      <h5 align="left" width="25px" float="left">
                        Rating:&nbsp;&nbsp;{item.rating}
                      </h5>
                      <br></br>
                      <br></br>
                      <center>
                        <h3 style={{ color: "#cc3300" }}>
                          M.R.P.:&nbsp;₹{item.price}/-
                        </h3>
                      </center>
                    </td>
                     <td>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                     {/*  <h5>
                      
                        <button
                        className="btn btn-outline-primary mx-2"
                          onClick={() => dispatch(incrementcart({
                            productName:item.pname,
                            productPrice:item.price
                          }))}>
                          Add To Cart
                        </button>
                        <button
                        className="btn btn-outline-primary mx-2"
                          onClick={() => dispatch(decrementcart({
                            productName:item.pname,
                            productPrice:item.price
                          }))}>
                          Remove From Cart
                        </button>
                      </h5> */}
                    </td> 
                    <td>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      
                      <h5 width="50px">
                        <Link
                          className="btn btn-outline-primary mx-2"
                          to={`/buynowproduct/${item.id}`}
                        >
                          Buy Now
                        </Link>
                      </h5>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* 

const columnDefs = [
    { field: 'pname', filter: true },
    { field: 'rating' },
    { field: 'price', filter: true }
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(item => setData(item));
  }, []);
  <div>
              <div className="ag-theme-alpine" style={{ width: 800, height: 500, margin: 'auto' }}>
                <AgGridReact
                  rowData={data}
                  columnDefs={columnDefs}
                />
              </div>
              </div> */
}

{
  /* <div className="container ">
            <div className="row">
              {filterStates.map((item) => (
                <div className="col-md-3" key={item.id}>
                  <div className="card p-4 p-4" style={{"height":"600px" ,"padding-bottom":"4px"}}>
                    <img src="https://capston-crm.s3.ap-south-1.amazonaws.com/mobile2.png" />
                  
                  <h5 className="card-title">{item.pname}</h5>
                  <p><h4 className="card-body">M.R.P: {item.price}/-</h4></p>
                  <Link
                    className="btn btn-outline-primary mx-2 card-link "
                    to={`/buynowproduct/${item.id}`}>
                    Buy Now
                  </Link>
                  </div>
                </div>
              ))}
            </div> */
}
