import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      label: props.label,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-login100-form-btn">
          <button name={this.state.name} className="login100-form-btn">
            {this.state.label}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Button;
