import React from "react";
import TextInput from "../text_input";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.login = this.login.bind(this);
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  login() {
    // TODO
  }

  render() {
    return (
      <form className="login100-form validate-form" onSubmit={this.login}>
        <span className="login100-form-title p-b-43">Login</span>
        <TextInput
          name="email"
          type="email"
          label="Email"
          mandatory={true}
          handleInputChange={this.handleInputChange.bind(this)}
        />
        <TextInput
          name="password"
          type="password"
          label="Mot de passe"
          mandatory={true}
          handleInputChange={this.handleInputChange.bind(this)}
        />
        <div className="flex-sb-m w-full p-t-3 p-b-32">
          <div className="contact100-form-checkbox">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="input-checkbox100"
            />
            <label htmlFor="remember-me" className="label-checkbox100"></label>
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
