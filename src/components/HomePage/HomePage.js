import React from "react";
import Background from "../../assets/background.webp";
import "./HomePage.css";

const HomePage = () => {
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
      <h1 className="title">Welcome to Winterfell</h1>

      <p className="description">
        Want to know and discover about the most beautiful and wealhty kingdom
        of Westeros? Here you can do it!
      </p>
    </div>
  );
};

export default HomePage;
