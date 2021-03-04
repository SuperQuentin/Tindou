import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-43">Login</span>
                <div className="wrap-input100 validate-input">
                  <input type="text" name="email" className="input100" />
                  <span className="focus-input100"></span>
                  <span className="label-input100">Email</span>
                </div>
                <div className="wrap-input100 validate-input">
                  <input type="password" name="password" className="input100" />
                  <span className="focus-input100"></span>
                  <span className="label-input100">Mot de passe</span>
                </div>
                <div className="flex-sb-m w-full p-t-3 p-b-32">
                  <div className="contact100-form-checkbox">
                    <input
                      type="checkbox"
                      id="remember-me"
                      name="remember-me"
                      className="input-checkbox100"
                    />
                    <label
                      htmlFor="remember-me"
                      className="label-checkbox100"
                    ></label>
                  </div>
                  <div>
                    <a href="#" className="txt1">
                      Mot de passe oublié ?
                    </a>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">Login</button>
                </div>
                <div className="text-center p-t-46 p-b-20">
                  <span className="txt2">Se connecter avec</span>
                </div>
                <div className="login100-form-social flex-c-m">
                  <a
                    href="#"
                    className="login100-form-social-item flex-c-m bg1 m-r-5"
                  >
                    <i className="fa fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a
                    href="#"
                    className="login100-form-social-item flex-c-m bg2 m-r-5"
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
              </form>
              <div className="login100-more"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
