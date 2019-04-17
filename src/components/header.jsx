import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import logo from '../images/logo.png';





class Header extends Component {

  render() {
    return (
        <nav>
        <div className="nav-wrapper">
               <a href="#" className="brand-logo center"><img src={logo} width="45" height="60"></img></a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    );
  }
}


export default Header;