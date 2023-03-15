import React from "react";
import TopMenu from "../TopMenu";
import HRmanager from "../../Managers/HRManager";
import Navbar from "../../Components/Navbar";
import "./Home.css";

export default function home() {
  return (
    <div>
      <Navbar />
      <center>
        <br /> <br />
        <h1 className="header">You are {HRmanager.currentUserName}</h1>
        <p>
          This is a demo for WSU Cpts 322. Intended to give an preview of how
          our resturant automation web tool would work.
        </p>
      </center>
    </div>
  );
}
