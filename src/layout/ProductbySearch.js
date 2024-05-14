import Navbar1 from "../users/Navbar1";
import { Link, useNavigate, useParams } from "react-router-dom";
function ProductbySearch() {
    let navigate=useNavigate();
    return (
        <section class="py-20">
            <div>
                <Navbar1 />
                <div className="container">
                    <div className="py-4">
                        Working..!
                    </div>
                    <button className="btn btn-outline-primary mx-2" onClick={()=>navigate("/products")}>Previous</button>
                </div>
            </div>
        </section>
    )
}
export default ProductbySearch;