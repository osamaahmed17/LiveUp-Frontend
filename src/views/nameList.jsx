import React, { Component } from 'react';
import requireAuth from './requireAuth';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import Cards from '../components/Cards'
import socketIO from 'socket.io-client';
import { Button, Modal } from 'react-bootstrap';


class NameList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      caller: localStorage.getItem('user'),
      called: this.props.name,
      username: '',
      show: 'close'

    }
  }




  render() {
    // console.log(this.state.show)
    var self = this
    var socket = socketIO("https://liveup.mybluemix.net");
      socket.on("Data", function (data, err) {
        if (data) {
          self.setState({show: data.showstate,username:data.username});
          console.log(data.showstate)
        }
        else {
          console.log("No Connection")
        }
      })
    
    // if (this.state.show === false) {
    
    //   socket.emit('Data', { caller: '', showstate: false }, function (data, err) {
    //     console.log(err);
    //   })
    //   socket.on("Data", function (data, err) {
    //     if (data) {
    //       self.setState({ newcalled: data.caller, show: data.showstate });
    //       console.log(data)
    //     }
    //     else {
    //       console.log("No Connection")
    //     }
    //   })
    // }
    let userMessage;
    if (this.state.show === 'open') {
      userMessage = (
        <h4><b>Incoming Call From:</b>{this.state.username}</h4>
      )
    }
    return (
      <div className="nameList">
        <h1><b>Welcome </b>{localStorage.getItem('user')}</h1>

        <div className="container">
          {userMessage}
          <div className="row">
            {this.props.name.map((value, key) => {
              return (
                <div className="col-lg-4">

                  <Cards key={value.username} data={value} truecallApi={this.truecallApi}  falsecallApi={this.falsecallApi} />

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