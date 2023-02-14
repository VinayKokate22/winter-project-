import React from "react";
import Topbar from "../components/navbar/Topbar";
import "./payment.css";

const Payment = () => {
  return (
    <div className="payment_section">
      <Topbar />
      <div className="payment_div1">
        <div>
          <i className="fa-solid fa-circle-check"></i>
          <b>parking</b>
        </div>
        <div className="line"></div>
        <div>
          <i className="fa-solid fa-circle-notch"></i>
          <b>payment</b>
        </div>
      </div>
      <div className="payment_div2">
        <div className="payment_mydetails">
          <div>
            <h3>My Details</h3>
            <p>* mandetory field</p>
          </div>
          <div>
            <form action="">
              <fieldset className="payment_mydetails_form">
                <input
                  type="text"
                  placeholder="Enter firstname"
                  name="firstname"
                  id="firstname"
                  required
                />

                <input
                  type="text"
                  placeholder="Enter lastname"
                  name="lastname"
                  id="lastname"
                  required
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  required
                />

                <input
                  type="contact"
                  placeholder="Enter contact"
                  name="contact"
                  id="contact"
                  required
                />
                <button className="paymentbutton">Pay</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="payment_summary">
          <h4>summary</h4>
          <h3>location</h3>
          <p>duration</p>
          <h2>total</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            molestias non iste eveniet at. In voluptate totam eaque beatae, modi
            eum iusto explicabo facere distinctio assumenda illum velit
            consectetur porro? lorem*10
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
