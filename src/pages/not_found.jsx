import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container d-flex justify-content-center mb-5">
          <h1>404 | Not found</h1>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default NotFound;
