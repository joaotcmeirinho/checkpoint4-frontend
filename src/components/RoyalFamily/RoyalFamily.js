import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Background from "../../assets/background.webp";
import "./RoyalFamily.css";
import axios from "axios";

const RoyalFamily = () => {
  const [family, setFamily] = useState([]);

  const getFamily = async () => {
    const response = await axios.get("http://localhost:5001/api/family");

    setFamily(response.data);
  };

  useEffect(() => {
    getFamily();
  }, []);

  console.log();

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="royal-family-ctn"
    >
      <h1 className="royal-family-title">Meet our great Royal Family</h1>
      <div className="family-ctn">
        {family.map((f) => (
          <div className="family-member" key={f.id}>
            <img className="member-img" src={f.url} alt={f.name} />
            <div className="member-info">
              <h3 className="member-name">{f.name}</h3>
              <p className="member-age">{f.age} years old</p>
            </div>
            <NavLink to={`/members/${f.id}`}>
              <button className="member-btn">Know more</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoyalFamily;
