import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register2.css";

class Register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      formErrors: {
        id: "",
        username: "",
        phone: "",
        email: "",
        password: "",
      },
      idValid: false,
      usernameValid: false,
      phoneValid: false,
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
    let idValid = this.state.idValid;
    let usernameValid = this.state.usernameValid;
    let phoneValid = this.state.phoneValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "id":
        idValid = value.match(/^([a-zA-Z0-9]{1,5})$/i);
        fieldValidationErrors.id = idValid ? "" : "ID is invalid";
        break;
      case "username":
        usernameValid = value.match(/^([a-zA-Z ]+)$/i);
        fieldValidationErrors.username = usernameValid
          ? ""
          : "Name should contain only alphabets";
        break;
      case "phone":
        phoneValid = value.match(/^([0-9]{10})$/i);
        fieldValidationErrors.phone = phoneValid ? "" : "Phone No is invalid";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Email is invalid";
        break;
      case "password":
        passwordValid = value.length >= 5;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Password should contain min 5 characters";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        idValid: idValid,
        usernameValid: usernameValid,
        phoneValid: phoneValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.idValid &&
        this.state.usernameValid &&
        this.state.phoneValid &&
        this.state.emailValid &&
        this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div class="text-center box">
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
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <form class="form-signin container">
          <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>

          <div className="form-group">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.id
              )}`}
            >
              <input
                type="text"
                required
                className="form-control rounded"
                name="id"
                placeholder="Employee ID"
                value={this.state.id}
                onChange={this.handleUserInput}
              />
              <span id="r1">{this.state.formErrors.id}</span>
            </div>
          </div>

          <div className="form-group">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.username
              )}`}
            >
              <input
                type="text"
                required
                className="form-control rounded"
                name="username"
                placeholder="Name"
                value={this.state.username}
                onChange={this.handleUserInput}
              />
              <span id="r1">{this.state.formErrors.username}</span>
            </div>
          </div>

          <div className="form-group">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.email
              )}`}
            >
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

          <div className="form-group">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.phone
              )}`}
            >
              <input
                type="tel"
                required
                className="form-control rounded"
                name="phone"
                placeholder="Phone No"
                value={this.state.phone}
                onChange={this.handleUserInput}
              />
              <span id="r1">{this.state.formErrors.phone}</span>
            </div>
          </div>
          <Link className="nav-link" to="/login">
            <button
              type="submit"
              id="btn2"
              className="btn btn-block btn-outline-secondary"
              disabled={!this.state.formValid}
            >
              Register
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register2;
