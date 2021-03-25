import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="colophon" class="site-footer" role="contentinfo">
        <div class="site-info">
          <div class="container">
            <div class="row">
              <div class="copyright-info col-md-6 col-sm-12">
                <a href="">Powered by Tindou</a>
                <span class="sep"> | </span>
                <a href="" target="_blank" rel="designer">
                  Colorlib.com
                </a>
              </div>
              <div class="main-footer-navigation col-md-6 col-sm-12"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
