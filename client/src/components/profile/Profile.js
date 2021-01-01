import React from "react";
//import { Link } from "react-router-dom";
//import logo from "../imgs/logo3.png";
import "./Profile.css";
import Navbar from "../navbar/Navbar";

function Profile() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <h3>User Profile</h3>
        <br />
        <p>Employee Name :</p>
        <span>
          <p></p>
        </span>
        <p>Email :</p>
        <span>
          <p></p>
        </span>
      </div>
    </div>
  );
}

export default Profile;
