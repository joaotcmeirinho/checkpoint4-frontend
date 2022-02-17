import React from "react";
import axios from "axios";
import "./Hello.css";
import { IconContext } from "react-icons";
import { CgLogOut } from "react-icons/cg";

const Hello = () => {
  const logout = async () => {
    axios.defaults.withCredentials = true;

    await axios.post("http://localhost:5001/api/admin/logout");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <h1 className="hello-admin">Hello Admin</h1>
      <IconContext.Provider value={{ size: "22.5px", color: "white" }}>
        <button onClick={logout} className="logout-btn">
          <CgLogOut />
        </button>
      </IconContext.Provider>
    </>
  );
};

export default Hello;
