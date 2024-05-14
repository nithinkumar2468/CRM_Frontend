import Navbar1 from './Navbar1';
import "./faq.css";

function Faq() {

  return (

    <div>

      <Navbar1 />
      <div className='py-20'>
        <div className='py-10'>
          <center><h2>FREQUENTLY ASKED QUESTIONS</h2></center>



          <div>
            <div class="accordion">
              <details>
                <summary>How can I place an order?</summary>
                <p>To place an order, simply browse our products, add desired items to your cart, and proceed to checkout. Follow the steps to provide shipping information and payment details.</p>
              </details>
              <details>
                <summary>What payment methods do we accept?</summary>
                <p>We accept major credit/debit cards, PayPal, and other secure payment methods. All transactions are encrypted for your security.</p>
              </details>
              <details>
                <summary>Can I modify or cancel my order after placing it?</summary>
                <p>Unfortunately, orders cannot be modified or canceled once they are placed. Please double-check your order before confirming.</p>
              </details>
              <details>
                <summary>What is your return policy?</summary>
                <p>We have a hassle-free return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
              </details>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
export default Faq






/* const display = () => {
  var panel = this.nextElementSibling;
  if (panel.style.display === 'block') {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
};
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", display());
}
console.log(acc.length); */