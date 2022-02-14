import React, { useState } from "react";
import axios from "axios";
import "./AddInput.css";

const AddInput = ({ setInput }) => {
  const [asset, setAsset] = useState("");
  const [quantity, setQuantity] = useState("");
  const [worth, setWorth] = useState("");

  const addAsset = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:5001/api/assets", {
      name: asset,
      quantity: quantity,
      worth: worth,
    });

    window.location.href = "/assets";

    console.log(response);
  };

  return (
    <div className="input-wrapper">
      <form className="input-fields" onSubmit={addAsset}>
        <input
          onChange={(e) => {
            setAsset(e.target.value);
          }}
          placeholder="Asset"
          type="text"
        ></input>
        <input
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          placeholder="Quantity"
          type="number"
        ></input>
        <input
          onChange={(e) => {
            setWorth(e.target.value);
          }}
          placeholder="Worth"
          type="number"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddInput;
