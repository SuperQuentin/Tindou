import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="site-info">
          <div className="container">
            <div className="row">
              <div className="copyright-info col-md-6 col-sm-12">
                <a href="">Powered by Tindou</a>
                <span className="sep"> | </span>
                <a href="https://colorlib.com/" target="_blank" rel="designer">
                  Colorlib.com
                </a>
              </div>
              <div className="main-footer-navigation col-md-6 col-sm-12"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
