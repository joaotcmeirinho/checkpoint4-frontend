import React, { useState } from "react";
import axios from "axios";
import Background from "../../assets/background.webp";
import "./Login.css";
import { IconContext } from "react-icons";
import { BiLogInCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://winterfell-app.herokuapp.com/api/admin/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      localStorage.setItem("loggedIn", true);
      // window.location.href = "/";
    } catch (err) {
      notify(err.response.data);
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
      className="login-ctn"
    >
      <h1 className="login-title">Admin Login</h1>
      <div className="login-form-ctn">
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-element">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-input-field"
            />
          </div>
          <div className="form-element">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-input-field"
            />
          </div>
          <div className="form-element">
            <IconContext.Provider value={{ size: "25px", color: "white" }}>
              <button className="login-btn" type="submit">
                <BiLogInCircle />
              </button>
            </IconContext.Provider>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
