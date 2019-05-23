import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <ul id="nav-mobile" className="float-right header-links">
                    <li><Link to="/namelist">Call List</Link></li>
                    <li><Link to="/signout">Sign Out</Link></li>
                </ul>
            );
        } else {
            return (
                <ul id="nav-mobile" className="float-right header-links" >
                    <li><Link to="/signin">Sign In</Link> </li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            );
        }
    }

    render() {
        return (
             <nav className="app-header">
                <div className="row">
                    <div className="col-lg-2">
                        <a href="#" className="brand-logo center">
                            <img src={logo} width="55" height="85">
                            </img>
                        </a>
                    </div>
                    <div className="col-lg-7"></div>
                    <div className="col-lg-3">
                        {this.renderLinks()} 
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);