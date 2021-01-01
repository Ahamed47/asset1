import React from "react";
//import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div class="container Trip">
        <h1>Welcome</h1>
      </div>
    </div>
  );
}

export default Home;
