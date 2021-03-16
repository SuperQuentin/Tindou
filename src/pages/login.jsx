import React from "react";
import LoginForm from "../components/login/login_form";
import LoginBackground from "../components/login/login_background";

class Login extends React.Component {
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
