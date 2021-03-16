import React from "react";

/**
 * TextInput component
 * @description will provide text input with optional feature
 * @visibleName Text input
 */
class TextInput extends React.Component {
  /**
   * TextInput constructor
   * @description register props in the state of the component
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      /**
       * Name of the input
       * @type {string}
       */
      name: props.name,
      /**
       * Type of input (email, text)
       * @type {string}
       */
      type: props.type,
      /**
       * The display label of the input
       * @type {string}
       */
      label: props.label,
      /**
       * If the input is required
       * @type {bool}
       */
      mandatory: props.mandatory,
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {    
    this.props.handleInputChange(this.state.name, event.target.value);
  }

  /**
   *
   * @param {*} event
   */
  handleBlur(event) {
    if (event.target.value == "") event.target.className = "input100";
  }

  /**
   *
   * @param {*} event
   */
  handleFocus(event) {
    event.target.className = "input100 has-val";
  }

  render() {
    return (
      <div className="wrap-input100 validate-input">
        <input
          type={this.state.type}
          name={this.state.name}
          className="input100"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          required={this.mandatory}
          onChange={this.handleInputChange}
        />
        <span className="focus-input100"></span>
        <span className="label-input100">{this.state.label}</span>
      </div>
    );
  }
}

export default TextInput;
