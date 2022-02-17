import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../Helper/Context";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Background from "../../assets/background.webp";
import "./RoyalAssets.css";
import { GrEdit } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import AddInput from "../AddInput/AddInput";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import EditPopUp from "../EditPopUp/EditPopUp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const RoyalAssets = () => {
  const [assets, setAssets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [assetId, setAssetId] = useState("");

  const { loggedIn } = useContext(LoginContext);

  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const getAssets = async () => {
    const response = await axios.get("http://localhost:5001/api/assets");

    setAssets(response.data);
  };

  const getCategories = async () => {
    const response = await axios.get(
      "http://localhost:5001/api/assets/categories"
    );

    setCategories(response.data.slice(1, 4).map((c) => Object.values(c)[0]));
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getAssets();
  }, [assets]);

  return (
    <>
      <div className="modal-ctn">
        {addModal && <AddInput notify={notify} setAddModal={setAddModal} />}
        {editModal && (
          <EditPopUp
            assets={assets}
            assetId={assetId}
            setEditModal={setEditModal}
            notify={notify}
          />
        )}
        {deleteModal && (
          <DeletePopUp
            notify={notify}
            setDeleteModal={setDeleteModal}
            assetId={assetId}
          />
        )}
      </div>

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
            {categories.map((c) => (
              <h1 key={uuidv4()} className="category">
                {c}
              </h1>
            ))}
            <div className="category"></div>
          </div>
          <div className="table-body">
            {assets.map((a) => (
              <>
                <div key={uuidv4()} className="table-row">
                  <p className="table-row-item" id="name">
                    {a.name}
                  </p>

                  <p className="table-row-item" id="quantity">
                    {a.quantity}
                  </p>

                  <p className="table-row-item" id="worth">
                    {a.worth}
                  </p>
                  <div className="crud-btns">
                    {loggedIn && (
                      <IconContext.Provider value={{ size: "25px" }}>
                        <button
                          onClick={() => {
                            setEditModal(true);
                            setAssetId(a.id);
                          }}
                          id="edit"
                          className="crud-btn"
                        >
                          {<GrEdit />}
                        </button>

                        <button
                          onClick={() => {
                            setDeleteModal(true);
                            setAssetId(a.id);
                          }}
                          id="delete"
                          className="crud-btn"
                        >
                          <RiDeleteBin5Line />
                        </button>
                      </IconContext.Provider>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        {loggedIn && (
          <IconContext.Provider value={{ size: "25px", color: "white" }}>
            <div className="crud-btns" id="add-btn">
              <button
                onClick={() => setAddModal(true)}
                value="add"
                className="crud-btn"
              >
                <IoIosAddCircleOutline />
              </button>
            </div>
          </IconContext.Provider>
        )}
      </div>
    </>
  );
};

export default RoyalAssets;
