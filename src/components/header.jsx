import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="masthead" className="site-header" role="banner">
        <div className="site-branding ">
          <div className="top-header container">
            <div className="search-header-form-container pull-right">
              <div id="search-header-form" className="search ">
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action=""
                >
                  <input id="search" type="search" name="s" placeholder="" />
                  <label htmlFor="search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </label>
                </form>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>

          <div className="container">
            <h1 className="site-title">Tindou</h1>
            <p className="site-description ">
              Tindou est le meilleur des sites pour trouver l'amour.
            </p>
          </div>
        </div>

        <nav
          id="site-navigation"
          className="main-navigation container"
          role="navigation"
        >
          <button
            className="menu-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            Menu
          </button>
          <div className="blaskan-main-menu">
            <div id="primary-menu" className="menu">
              <ul aria-expanded="false" className="nav-menu">
                <li className="page_item page-item-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="page_item page-item-182">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
