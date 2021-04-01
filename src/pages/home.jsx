import "../assets/css/index.css";
import React, { Component } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Carousel from "../components/home/carousel";
import Article from "../components/article";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Carousel />
        <div id="content" className="site-content container">
          <div id="primary" className="content-area row">
            <main className="site-main col-md-12 col-sm-12" role="main">
              <div id="posts-container" className="row">
                <Article title="Faites des rencontres inoubliables">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam at pulvinar tortor. Curabitur turpis libero,
                    pellentesque a ipsum non, fringilla dictum ipsum. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Proin ac risus enim. Aenean
                    nec arcu sed urna suscipit volutpat at vel nunc.
                  </p>
                </Article>
                <Article title="Soyez comme vous êtes">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam at pulvinar tortor. Curabitur turpis libero,
                    pellentesque a ipsum non, fringilla dictum ipsum. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Proin ac risus enim. Aenean
                    nec arcu sed urna suscipit volutpat at vel nunc. Aenean ut
                    dignissim velit. In eu tellus vitae tellus tristique
                    molestie vitae ut risus. Phasellus justo lacus, blandit nec
                    libero blandit, malesuada tincidunt mauris. Nulla feugiat,
                    enim eget elementum accumsan, mauris eros imperdiet leo, ut
                    mollis lorem dolor quis risus. Nulla eu molestie nunc,
                    aliquet pharetra purus. Duis in orci libero. Vivamus posuere
                    volutpat euismod. Curabitur tempus dictum gravida.
                  </p>
                </Article>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
