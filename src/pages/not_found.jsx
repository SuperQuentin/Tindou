import React, { Component } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container d-flex justify-content-center mb-5">
          <h1>404 | Page introuvable</h1>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default NotFound;
