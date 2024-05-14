import { NavLink, Link } from 'react-router-dom';
import "./navbar1.css";
import { MdLogout } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa";


function Navbar1() {

    const user=window.localStorage.getItem("isLoggedIn");
    
    /* const cartCount=useSelector((state)=>state.Reducer.cartValues.length)
    const carttotal=useSelector((state)=>state.Reducer.totalPrice) */

    
    return (
        <div>
            <nav className=" flex px-4 border-b md:shadow-lg items-center flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] lg:flex-wrap lg:justify-start">
                <div className="text-lg font-bold md:py-0 py-4">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="./images/jira.png"
                        alt="CRM"
                        style={{ height: '40px', maxWidth: '150px', borderRadius: '8px' }}

                    />
                </div>

                {user}
                <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                    <NavLink to={"/usermenu"}>
                        <li>
                            <a href="/usermenu" className="flex md:inline-flex p-4 items-center hover:bg-gray-50 " style={{ "textDecoration": 'none' }}>
                                <span style={{"color":"royalblue","fontSize":"20px"}}>Home</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/products"}>
                        <li>
                            <a href="/products" className="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{ "textDecoration": 'none' }}>
                                <span style={{"color":"royalblue","fontSize":"20px"}}>Products</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/enquiry"}>
                        <li>
                            <a href="/enquiry" className="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{ "textDecoration": 'none' }}>
                                <span style={{"color":"royalblue","fontSize":"20px"}}>Customer Care</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/mytickets"}>
                        <li>
                            <a href="/mytickets" className="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{ "textDecoration": 'none' }}>
                                <span style={{"color":"royalblue","fontSize":"20px"}}>My Tickets</span>
                            </a>
                        </li>
                    </NavLink>
                    
                    <NavLink to={"/cart"}>
                        <li>
                            <a href="/cart" className="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{ "textDecoration": 'none' }}>
                            <span style={{"color":"royalblue","fontSize":"20px"}}>Cart</span>
                            </a>
                        </li>
                    </NavLink>


                    <li>
                        <a href="/mypurchase" className="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{ "textDecoration": 'none'}}>
                            <span style={{"color":"royalblue","fontSize":"20px"}}>Account</span>
                        </a>
                        <ul>
                        <li><NavLink to={"/mypurchase"}><span style={{"color":"royalblue","fontSize":"20px"}}>My Orders</span></NavLink>
                            </li> 
                        <li><NavLink to={"/myaddress"}><span style={{"color":"royalblue","fontSize":"20px"}}>My Address</span></NavLink>
                            </li>
                             <li><NavLink to={"/faq"}><span style={{"color":"royalblue","fontSize":"20px","display":"flex"}}>&nbsp;<FaQuestion size={30}/>&nbsp;&nbsp;&nbsp;FAQ</span></NavLink>
                            </li>
                            <li><NavLink to={"/support"}><span style={{"color":"royalblue","fontSize":"20px","display":"flex"}}>&nbsp;<PiMapPin size={30}/>&nbsp;Reach Us</span></NavLink>
                            </li>
                            <li><Link to={"/"}>     
                                <span style={{"color":"royalblue","fontSize":"20px","display":"flex"}}>&nbsp;&nbsp;<MdLogout size={30}/>&nbsp;Logout</span>
                                </Link>
                            </li>  
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar1;
