import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import ResponsiveAppBar from "./components/AppBar";
import { ContactPage } from "./components/ContactPage";
import { AboutPage } from "./components/AboutPage";
import Test from "./components/dev/Test";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <div className="AppBar">
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/CardComponent" element={<CardComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
