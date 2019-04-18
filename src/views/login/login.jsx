import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import { Form,Button } from 'react-bootstrap';
import '../../App.css';

class Login extends Component {

  render() {
    return (
      <div className="Login">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4 myform">
            <Form>
            
              <Form.Group controlId="loginType">
                <Form.Control as="select">
                  <option>---LoginType---</option>
                  <option>Admin</option>
                  <option>User</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlI="username">
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group controlI="password">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div class="row">
                <div class="col-lg-4">
                  <Button variant="success" className="text-capitalize">Signup</Button>
                </div>
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                  <Button  variant="danger" type="submit" className="text-capitalize">Login</Button>
                </div>
              </div>
            </Form>
          </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
  );}
}

export default Login;
