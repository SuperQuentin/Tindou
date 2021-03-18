import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (value != "") event.target.className += " has-val";
    else event.target.className = "input100";

    this.setState(
      {
        [name]: value,
      },
      this.changeButtonState
    );
  };

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
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <form className="login100-form validate-form" onSubmit={this.login}>
        <span className="login100-form-title p-b-43">Login</span>
        <div className="wrap-input100 validate-input">
          <input
            id="email"
            type="email"
            name="email"
            className="input100"
            value={this.state.email}
            required={true}
            onChange={this.handleInputChange}
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
