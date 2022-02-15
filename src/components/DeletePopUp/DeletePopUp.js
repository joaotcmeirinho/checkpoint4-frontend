import React from "react";
import axios from "axios";
import "./DeletePopUp.css";

const DeletePopUp = ({ setDeleteModal, assetId }) => {
  const deleteAsset = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `http://localhost:5001/api/assets/${assetId}`
      );
      window.location.href = "/assets";
      console.log(response);
    } catch (err) {}
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setDeleteModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to delete</h1>
        </div>
        <div className="body">
          <button className="delete-btn" onClick={deleteAsset}>
            Yes
          </button>
          <button className="delete-btn" onClick={() => setDeleteModal(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
