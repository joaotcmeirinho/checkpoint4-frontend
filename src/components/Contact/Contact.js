import React from "react";
import Background from "../../assets/background.webp";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="contact-ctn"
    >
      <h1 className="contact-title">You can contact us if you need our help</h1>
      <div className="contact-form">
        <div className="contact-form-item">
          <label>Your Email</label>
          <input className="contact-input-field" type="email" />
        </div>
        <div className="schedule-form-item">
          <label>Matter</label>
          <input className="contact-input-field" type="text" />
        </div>
        <div className="contact-form-item">
          <label>How can we help?</label>
          <input className="contact-input-field" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
