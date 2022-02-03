import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "../../assets/background.webp";
import "./RoyalAssets.css";

const RoyalAssets = () => {
  const [assets, setAssets] = useState([]);

  const getAssets = async () => {
    const response = await axios.get("http://localhost:5001/api/assets");

    setAssets(response.data);
  };

  useEffect(() => {
    getAssets();
  }, []);

  const categories = ["Asset", "Quantity", "Worth"];

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="royal-assets-ctn"
    >
      <h1 className="royal-assets-title">Royal Assets</h1>
      <div className="table-ctn">
        <div className="table-header">
          {" "}
          {categories.map((c) => (
            <h3 className="table-categories">{c}</h3>
          ))}
        </div>

        {assets.map((asset) => (
          <div className="assets-table">
            <div className="table-row"></div>
            <div className="table-itm">
              <h3>{asset.name}</h3>
            </div>
            <div className="table-itm">
              <p>{asset.quantity}</p>
            </div>
            <div className="table-itm">
              <p>{asset.worth}$</p>
            </div>
          </div>
        ))}
      </div>

      <div className="crud-btns">
        <button className="crud-btn">Add</button>
        <button className="crud-btn">Edit</button>
        <button className="crud-btn">Delete</button>
      </div>
    </div>
  );
};

export default RoyalAssets;
