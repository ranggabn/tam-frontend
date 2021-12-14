import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Motto from "./Components/Pages/About/Motto";
import Visi from "./Components/Pages/About/Visi";
import Company from "./Components/Pages/Company/Company";
import Home from "./Components/Pages/Home/Home";
import FooterComp from "./Components/Utils/FooterComp";
import NavbarComp from "./Components/Utils/NavbarComp";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/visi" element={<Visi />} />
        <Route path="/motto" element={<Motto />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <FooterComp />
    </Router>
  );
}

export default App;
