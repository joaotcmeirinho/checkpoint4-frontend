import React from "react";
import Background from "../../assets/background.webp";
import "./Schedule.css";
import { IconContext } from "react-icons";
import { IoSendSharp } from "react-icons/io5";

const Schedule = () => {
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
      <h1 className="schedule-title">
        Schedule a visit to our kingdom and come to know us
      </h1>

      <img
        className="winterfell-img"
        src="https://cdn.vox-cdn.com/thumbor/pR1Z4ohDIvQalm_NQNP-OUFGQyw=/0x0:5000x3333/920x613/filters:focal(2193x789:2993x1589):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63571452/winterfell.0.jpg"
      />
      <div className="schedule-form">
        <div className="schedule-form-item">
          <label>Which day?</label>
          <input className="schedule-input-field" type="date" />
        </div>
        <div className="schedule-form-item">
          <label>What hours?</label>
          <input className="schedule-input-field" type="time" />
        </div>
        <div className="schedule-form-item">
          <label>Tell us your email</label>
          <input className="schedule-input-field" type="email" />
        </div>
        <IconContext.Provider value={{ size: "25px", color: "white" }}>
          <div className="schedule-form-item">
            <button className="submit-form-btn" type="submit">
              <IoSendSharp />
            </button>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Schedule;
