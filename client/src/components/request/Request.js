import React from "react";
//import { Link } from "react-router-dom";
import "./Request.css";
import Navbar from "../navbar/Navbar";

function Request() {
  return (
    <div>
      <Navbar />
      <div class="container contain">
        <h4 class="mb-3">Request Asset</h4>
        <form class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="name">Product</label>
            <input
              type="text"
              class="form-control"
              id="name"
              pattern="[a-zA-Z ]+"
              required
            />
          </div>

          <div class="mb-3">
            <label for="address">Category</label>
            <input
              type="text"
              class="form-control"
              id="name"
              pattern="[a-zA-Z ]+"
              required
            />
          </div>

          <div class="mb-3">
            <label for="phone">Quantity</label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              placeholder=""
              pattern="[0-9]+"
              required
            />
          </div>

          <hr class="mb-4" />
          <button class="btn btn-primary btn-lg btn-block" type="submit">
            Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Request;
