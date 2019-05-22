import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';


class HomePage extends Component {

  render() {

    return (
      <div className="container">
        <h2 className="title">Welcome to LiveUp</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
        <h2 className="title">How it works</h2>
        <div className="row">
          <div className="service-grid col-lg-3">
            <i className="medium material-icons">people</i>
            <h5>Register</h5>
          </div>
          <div className="service-grid col-lg-3">
            <i className="medium material-icons">verified_user</i>
            <h5>Login</h5>
          </div>
          <div className="service-grid col-lg-3">
            <i className="medium material-icons">view_list</i>
            <h5>User List</h5>
          </div>
          <div className="service-grid col-lg-3">
            <i className="medium material-icons">video_call</i>
            <h5>Video Call</h5>
          </div>
        </div>

      </div>

    );
  }

}

export default HomePage;

