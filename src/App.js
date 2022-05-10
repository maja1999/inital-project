import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (toggle === true) {
      toast.success("ToggleOn");
    } else {
      toast.warn("ToggleOff");
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        {toggle ? <img src={logo} className="App-logo" alt="logo" /> : null}
        <button
          className="my-button"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          button
        </button>
      </header>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
