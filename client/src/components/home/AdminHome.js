import React from "react";
//import { Link } from "react-router-dom";
import AdminNavbar from "../navbar/AdminNavbar";
import "./Home.css";

function AdminHome() {
  return (
    <div>
      <AdminNavbar />
      <div class="container Trip">
        <h1>Welcome</h1>
      </div>
    </div>
  );
}

export default AdminHome;
