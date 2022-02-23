import React, { useState } from "react";
import axios from "axios";
import "./AddInput.css";

const AddInput = ({ setAddModal, notify }) => {
  const [asset, setAsset] = useState("");
  const [quantity, setQuantity] = useState("");
  const [worth, setWorth] = useState("");

  const addAsset = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://winterfell-app.herokuapp.com/api/assets",
      {
        name: asset,
        quantity: quantity,
        worth: worth,
      },
      { withCredentials: true }
    );
    setAddModal(false);
    notify(response.data);
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setAddModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>New Asset</h1>
        </div>
        <div className="body">
          <form className="input-fields" onSubmit={addAsset}>
            <input
              onChange={(e) => {
                setAsset(e.target.value);
              }}
              placeholder="Asset"
              type="text"
              className="input-field"
              required
            ></input>
            <input
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              placeholder="Quantity"
              type="number"
              className="input-field"
              required
            ></input>
            <input
              onChange={(e) => {
                setWorth(e.target.value);
              }}
              placeholder="Worth"
              type="number"
              className="input-field"
              required
            ></input>
            <button className="add-btn" type="submit">
              Add Asset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInput;
