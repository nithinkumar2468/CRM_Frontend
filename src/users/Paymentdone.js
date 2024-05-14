import Navbar1 from "./Navbar1";

function Paymentdone(){
    return(
        <div>
            <Navbar1/>
            <center>
                <div className="py-20">
                <img src="images/paymentsuccess.png" alt="payment successful"/>
                <h2>Your Order Placed Successfully..!</h2>
                </div>
                
            </center>
        </div>
    );
}
export default Paymentdone;