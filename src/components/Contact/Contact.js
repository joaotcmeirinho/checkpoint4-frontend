import React, { useState } from "react";
import axios from "axios";
import Background from "../../assets/background.webp";
import "./Contact.css";
import { IoSendSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import SuccessScreen from "../SuccessScreen/SuccessScreen";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [matter, setMatter] = useState("");
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    await axios.post("https://winterfell-app.herokuapp.com/api/email", {
      email,
      matter,
      text,
    });
    setSent(true);
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
      {!sent ? (
        <>
          <h1 className="contact-title">
            You can contact us if you need our help
          </h1>
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
        </>
      ) : (
        <SuccessScreen type="contact" />
      )}
    </div>
  );
};

export default Contact;
