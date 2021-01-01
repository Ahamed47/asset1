import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "email is invalid";
        break;
      case "password":
        passwordValid = value.length >= 5;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "password should contain min 5 characters";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div class="text-center1">
        <nav className="navbar fixed-top navbar-expand-lg">
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
                <Link className="nav-link" to="/register2">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <form class="form-signin container5 login">
          <h1 class="h3 mb-3 font-weight-normal">Please Log In</h1>

          <div className="form-group">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.email
              )}`}
            >
              <label for="inputEmail" class="sr-only">
                Email address
              </label>
              <input
                type="email"
                required
                className="form-control rounded"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUserInput}
              />
              <span id="r1">{this.state.formErrors.email}</span>
            </div>
          </div>

          <div className="form-group">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.password
              )}`}
            >
              <label for="inputPassword" class="sr-only">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded"
                name="password"
                required
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleUserInput}
              />
              <span id="r1">{this.state.formErrors.password}</span>
            </div>
          </div>

          <Link className="link" to="/home">
            <button
              type="submit"
              id="btn1"
              className="btn btn-block btn-outline-secondary"
              disabled={!this.state.formValid}
            >
              Log In
            </button>
          </Link>
          <Link id="link2" to="/register2">
            Register
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
