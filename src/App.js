import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import RoyalFamily from "./components/RoyalFamily/RoyalFamily";
import RoyalAssets from "./components/RoyalAssets/RoyalAssets";
import Schedule from "./components/Schedule/Schedule";
import Contact from "./components/Contact/Contact";
import { MemberDetails } from "./components/MemberDetails/MemberDetails";
import Login from "./components/Login/Login";
import { LoginContext } from "./Helper/Context.js";
import { useState } from "react";
import "./index.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn", false))
  );

  return (
    <>
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/members" element={<RoyalFamily />} />
            <Route path="/assets" element={<RoyalAssets />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/members/:id" element={<MemberDetails />} />
            <Route path="/admin" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  );
}

export default App;
