import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter} from 'react-router-dom'
class Header extends Component {
    renderLinks() {
        
        if (this.props.authenticated) {
            return (
                <ul id="nav-mobile">
                    <li><Link to="/signout">Sign Out</Link></li>
                    <li><Link to="/namelist">Call List</Link></li>
                </ul>
            );
        } else {
            return (
                <ul id="nav-mobile">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/signin">Sign In</Link> </li>
                </ul>
            );
        }
    }

    render() {
        return (
        
             <nav>
             <div className="nav-wrapper">
                 <a href="#" className="brand-logo center"><img src={logo} width="45" height="60"></img></a>
                 
                 {this.renderLinks()} 
              
             </div>
         </nav>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);