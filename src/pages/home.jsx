import "../assets/css/index.css";
import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container d-flex justify-content-center mb-5">
          <h1>Home</h1>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
