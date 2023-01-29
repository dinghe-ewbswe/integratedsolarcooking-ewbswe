import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen2";
import AboutSolarCooking from "./screens/AboutSolarCooking";
import SolarCookerScreen from "./screens/SolarCooker";
import React from "react";
import ProductsScreen from "./screens/Products";
import ContactScreen from "./screens/ContactScreen";
import Hamburger from "hamburger-react";
import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="Hamburger hamPosition">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Router>
          <Routes>
            <Route
              path="/Integratedsolarcooking"
              element={<LandingScreen isOpen={isOpen} />}
            />
            <Route
              path="/AboutSolarCooking"
              element={<AboutSolarCooking isOpen={isOpen} />}
            />
            <Route
              path="/SolarCooker"
              element={<SolarCookerScreen isOpen={isOpen} />}
            />
            <Route
              path="/Products"
              element={<ProductsScreen isOpen={isOpen} />}
            />
            <Route
              path="/Contact"
              element={<ContactScreen isOpen={isOpen} />}
            />
            <Route path="/next" element={<div isOpen={isOpen}>Next</div>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
