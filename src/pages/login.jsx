import React, { Component } from "react";
import LoginForm from "../components/login/login_form";
import LoginBackground from "../components/login/login_background";
import "../assets/css/login.css";
import "../assets/css/login_util.css";

class Login extends Component {
  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <LoginForm />
            <LoginBackground />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
