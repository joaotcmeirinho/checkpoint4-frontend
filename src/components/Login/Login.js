import React, { useState, useContext } from "react";
import axios from "axios";
import Background from "../../assets/background.webp";
import "./Login.css";
import { IconContext } from "react-icons";
import { BiLogInCircle } from "react-icons/bi";
import { LoginContext } from "../../Helper/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      sessionStorage.setItem("loggedIn", true);
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
              <button type="submit" className="login-btn" type="submit">
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
