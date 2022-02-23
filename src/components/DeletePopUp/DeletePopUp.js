import React from "react";
import axios from "axios";
import "./DeletePopUp.css";

const DeletePopUp = ({ setDeleteModal, assetId, notify }) => {
  const deleteAsset = async (e) => {
    e.preventDefault();

    const response = await axios.delete(
      `https://winterfell-app.herokuapp.com/api/assets/${assetId}`,
      { withCredentials: true }
    );
    setDeleteModal(false);
    notify(response.data);
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
