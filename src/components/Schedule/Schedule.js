import React, { useState } from "react";
import axios from "axios";
import Background from "../../assets/background.webp";
import "./Schedule.css";
import { IconContext } from "react-icons";
import { IoSendSharp } from "react-icons/io5";
import SuccessScreen from "../SuccessScreen/SuccessScreen";

const Schedule = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  const scheduleVisit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/api/visits", {
        date,
        time,
        email,
      });
      setSuccess(true);

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
      className="schedule-ctn"
    >
      {" "}
      {!success ? (
        <>
          <h1 className="schedule-title">
            Schedule a visit to our kingdom and come to know us
          </h1>

          <img
            className="winterfell-img"
            alt="Winterfell Illustration"
            src="https://cdn.vox-cdn.com/thumbor/pR1Z4ohDIvQalm_NQNP-OUFGQyw=/0x0:5000x3333/920x613/filters:focal(2193x789:2993x1589):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63571452/winterfell.0.jpg"
          />
          <form onSubmit={scheduleVisit} className="schedule-form">
            <div className="schedule-form-item">
              <label>Which day?</label>
              <input
                min={today}
                onChange={(e) => setDate(e.target.value)}
                className="schedule-input-field"
                type="date"
                required
              />
            </div>
            <div className="schedule-form-item">
              <label>What hours?</label>
              <input
                onChange={(e) => setTime(e.target.value)}
                className="schedule-input-field"
                type="time"
                required
              />
            </div>
            <div className="schedule-form-item">
              <label>Tell us your email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="schedule-input-field"
                type="email"
                required
              />
            </div>
            <IconContext.Provider value={{ size: "25px", color: "white" }}>
              <div className="schedule-form-item">
                <button className="submit-form-btn" type="submit">
                  <IoSendSharp />
                </button>
              </div>
            </IconContext.Provider>
          </form>
        </>
      ) : (
        <SuccessScreen />
      )}
    </div>
  );
};

export default Schedule;
