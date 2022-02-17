import React from "react";
import "./SuccessScreen.css";

const SuccessScreen = ({ type }) => {
  if (type == "schedule") {
    return (
      <div className="success-screen-ctn">
        <h1 className="success-title">Your Visit To Winterfell</h1>

        <p className="message">
          Thank you for booking a visit to our beautiful kingdom.<br></br> You
          will receive a confirmation in your email.
        </p>

        <p className="final-message">We are waiting for you!</p>
      </div>
    );
  } else {
    return (
      <div className="success-screen-ctn">
        <h1 className="success-title">Thank you for your email</h1>

        <p className="message">
          Thank you for reaching us<br></br> We will try to help and answer you
          as soon as we can
        </p>
        <p className="final-message">
          "The winters are hard but the Starks will endure."
        </p>
      </div>
    );
  }
};

export default SuccessScreen;
