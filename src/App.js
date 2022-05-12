import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./components/HomePage";
import { AppBar } from "./components/AppBar";
import { ContactPage } from "./components/ContactPage";
import { AboutPage } from "./components/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <div className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/About" element={<AboutPage />} />
          </Routes>
        </div>

        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    </Router>
  );
}

export default App;
