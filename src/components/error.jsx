import React, { Component } from 'react'

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: this.props.errorMsg}
  }

  render() {
    if (this.state.errorMsg) {
      return (
        <div className="alert alert-danger" role="alert">
          { this.state.errorMsg.toString() }
        </div>
      )
    }
    return null
  }
}

export default Error;