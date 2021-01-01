import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="#">
          Asset Management App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin_home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/asset">
                Assets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin_report">
                Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin_request">
                Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin_profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
