import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import RoyalFamily from "./components/RoyalFamily/RoyalFamily";
import RoyalAssets from "./components/RoyalAssets/RoyalAssets";
import Schedule from "./components/Schedule/Schedule";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/members" element={<RoyalFamily />} />
          <Route path="/assets" element={<RoyalAssets />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
