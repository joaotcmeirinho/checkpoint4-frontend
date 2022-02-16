import React from "react";
import "./Hello.css";
import { IconContext } from "react-icons";
import { CgLogOut } from "react-icons/cg";

const Hello = () => {
  return (
    <>
      <h1 className="hello-admin">Hello name</h1>
      <IconContext.Provider value={{ size: "25px", color: "white" }}>
        <button className="logout-btn">
          <CgLogOut />
        </button>
      </IconContext.Provider>
    </>
  );
};

export default Hello;
