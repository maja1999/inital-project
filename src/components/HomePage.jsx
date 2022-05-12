
import React, { useState, useEffect } from "react";
import logo from "../logo.svg";

import { Button, Badge } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import {  toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";


export const HomePage = () => {
    const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (toggle === true) {
      toast.success("ToggleOn");
    } else {
      toast.warn("ToggleOff");
    }
  });

    return (
    
         <>
            {toggle ? <img src={logo} className="App-logo" alt="logo" /> : null}
            <button
              className="my-button"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              button
            </button>
            <div>
              <Button color="danger">Ne radi</Button>
            </div>
            <div>
              <Badge color="primary">New</Badge>
            </div>
            
           </>
        
        
      );
}
