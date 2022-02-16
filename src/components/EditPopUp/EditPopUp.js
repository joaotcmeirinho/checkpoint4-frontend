import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPopUp = ({ setEditModal, assetId }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [worth, setWorth] = useState("");

  const getAssetInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/assets/${assetId}`
      );
      setName(response.data[0].name);
      setQuantity(response.data[0].quantity);
      setWorth(response.data[0].worth);
    } catch (err) {
      console.log(err);
    }
  };

  const editAsset = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5001/api/assets/${assetId}`,
        { name, quantity, worth },
        { withCredentials: true }
      );

      window.location.href = "/assets";

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAssetInfo();
  }, []);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setEditModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Edit Asset</h1>
        </div>
        <div className="body">
          <form onSubmit={editAsset} className="input-fields">
            <input
              type="text"
              className="input-field"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <input
              value={quantity}
              type="number"
              className="input-field"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            ></input>
            <input
              onChange={(e) => {
                setWorth(e.target.value);
              }}
              value={worth}
              type="number"
              className="input-field"
            ></input>
            <button className="add-btn" type="submit">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPopUp;
