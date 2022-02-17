import React, { useContext } from "react";
import { LoginContext } from "../../Helper/Context";
import Background from "../../assets/background.webp";
import "./HomePage.css";
import Hello from "../Hello/Hello";

const HomePage = () => {
  const { loggedIn } = useContext(LoginContext);

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="home-page-ctn"
    >
      {loggedIn && (
        <div className="admin-ctn">
          <Hello />
        </div>
      )}

      <h1 className="title">Welcome to Winterfell</h1>

      <p className="description">
        Want to know and discover about the most beautiful and wealhty kingdom
        of Westeros? Here you can do it!
      </p>
    </div>
  );
};

export default HomePage;
