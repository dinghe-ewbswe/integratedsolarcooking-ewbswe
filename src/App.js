import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
// import LandingScreen from "./screens/LandingScreen2";
import AboutUsScreen from "./screens/AboutUs";
import SolarCookerScreen from "./screens/SolarCooker";
import React from "react";
import ProductsScreen from "./screens/Products";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/integratedsolarcooking" element={<LandingScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
          <Route path="/SolarCooker" element={<SolarCookerScreen />} />
          <Route path="/Products" element={<ProductsScreen />} />
          <Route path="/Contact" element={<ContactScreen />} />

          <Route path="/next" element={<div>Next</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
