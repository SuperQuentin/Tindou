import React, { Component } from "react";
import Error from "../error";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
  };

  /**
   * Change the text input class when it has a value or not
   * @param {*} event
   */
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (value != "") event.target.classList.add("has-val");
    else event.target.classList.remove("has-val");

    this.setState(
      {
        [name]: value,
      },
      this.changeButtonState
    );
  };

  /**
   * Change the button class when all the text inputs have a value or not
   */
  changeButtonState = () => {
    const loginButton = document.getElementById("loginButton");

    if (this.state.email == "" || this.state.password == "") {
      loginButton.classList.add("login100-form-btn-disabled");
      loginButton.setAttribute("disabled", "true");
    } else {
      loginButton.classList.remove("login100-form-btn-disabled");
      loginButton.removeAttribute("disabled");
    }
  };

  login = () => {
    // TODO
  };

  render() {
    return (
      <form className="login100-form validate-form" data-testid="loginform" onSubmit={this.login}>
        <span className="login100-form-title p-b-43">Login</span>
        <Error id="errorMsg" errorMsg={this.state.errorMsg} />
        <div className="wrap-input100 validate-input">
          <input
            id="email"
            type="email"
            name="email"
            className="input100"
            value={this.state.email}
            required={true}
            onChange={this.handleInputChange}
            data-testid="email"
          />
          <span className="focus-input100"></span>
          <span className="label-input100">Email</span>
        </div>
        <div className="wrap-input100 validate-input">
          <input
            id="password"
            type="password"
            name="password"
            className="input100"
            value={this.state.password}
            required={true}
            onChange={this.handleInputChange}
            data-testid="password"
          />
          <span className="focus-input100"></span>
          <span className="label-input100">Password</span>
        </div>
        <div className="flex-sb-m w-full p-t-3 p-b-32">
          <div>
            <a href="#" className="txt1">
              Mot de passe oublié ?
            </a>
          </div>
        </div>
        <div className="container-login100-form-btn">
          <button
            id="loginButton"
            className="login100-form-btn login100-form-btn-disabled"
            data-testid="loginbtn"
            disabled
          >
            Login
          </button>
        </div>
        <div className="text-center p-t-46 p-b-20">
          <span className="txt2">Se connecter avec</span>
        </div>
        <div className="login100-form-social flex-c-m">
          <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
            <i className="fa fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </form>
    );
  }
}

export default LoginForm;
