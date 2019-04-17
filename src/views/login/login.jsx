import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  render() {


    return (

   
      <div className="Login">
      <h1>Login</h1>
      <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="username" type="text" class="validate"/>
          <label for="username">Username</label>
        </div>
        <div class="input-field col s6">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
            <input type="submit" value="Login"/>
      </div>
      
      </form>
      </div>
    );
  }
}

export default Cards;
