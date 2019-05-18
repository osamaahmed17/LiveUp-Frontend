import React, { Component } from 'react';
import requireAuth from './requireAuth';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import Cards from '../components/Cards'
import socketIO from 'socket.io-client';

class NameList extends Component {
  constructor(props)
   {
    super(props)
    this.state = {
      caller: localStorage.getItem('user'),
      called: this.props.name,
      newcaller: '',
      newcalled: ''

    }
  }
  componentDidMount() {
    this.socket = socketIO("https://liveup.mybluemix.net/");
    console.log("hello")
    this.socket.on("FromAPI", function (data, err) {
      if (data) {
        console.log(data.caller);
        this.setState({ newcaller: data.caller, newcalled: data.called });
      }
      else {
        console.log("No Connection")
      }
    })
  }

  render() {
    
    return (
      <div className="nameList">
        <h1><b>Welcome </b>{localStorage.getItem('user')}</h1>
        <div className="container">
          <div className="row">
            {this.props.name.map((value, key) => {
              return (
                <div className="col-lg-4">

                  <Cards key={value.username} data={value} />

                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default requireAuth(NameList);