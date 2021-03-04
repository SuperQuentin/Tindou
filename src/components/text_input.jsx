import React, { Component } from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      type: props.type,
      label: props.label,
    };
  }

  handleBlur(event) {
    if (event.target.value == "") event.target.className = "input100";
  }

  handleFocus(event) {
    event.target.className = "input100 has-val";
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrap-input100 validate-input">
          <input
            type={this.state.type}
            name={this.state.name}
            className="input100"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
          />
          <span className="focus-input100"></span>
          <span className="label-input100">{this.state.label}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default TextInput;
