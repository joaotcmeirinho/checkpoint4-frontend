import React, { useState } from "react";
import Background from "../../assets/background.webp";
import "./Contact.css";
import { IoSendSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [matter, setMatter] = useState("");
  const [text, setText] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/email", {
        email,
        matter,
        text,
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

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
      <form onSubmit={sendEmail} className="contact-form">
        <div className="contact-form-item">
          <label>Your Email</label>
          <input
            placeholder="Email"
            id="your-email"
            className="contact-input-field"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="schedule-form-item">
          <label>Matter</label>
          <input
            placeholder="Matter"
            id="matter"
            className="contact-input-field"
            type="text"
            onChange={(e) => {
              setMatter(e.target.value);
            }}
            required
          />
        </div>
        <div className="contact-form-item">
          <label>How can we help?</label>
          <textarea
            placeholder="Write your email"
            id="email"
            className="contact-input-field"
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          />
        </div>
        <IconContext.Provider value={{ size: "25px", color: "white" }}>
          <div className="contact-form-item">
            <button className="submit-form-btn" type="submit">
              <IoSendSharp />
            </button>
          </div>
        </IconContext.Provider>
      </form>
    </div>
  );
};

export default Contact;
