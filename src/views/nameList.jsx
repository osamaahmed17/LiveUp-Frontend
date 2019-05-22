import React, { Component } from 'react';
import requireAuth from './requireAuth';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import Cards from '../components/Cards'
import socketIO from 'socket.io-client';




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
        <div className="notification"><h5>Incoming Call From <b>{this.state.username}</b></h5></div>
      )
    }
    return (
      <div className="nameList">
      <div className="container">
        <h2 className="title">Welcome {localStorage.getItem('user')}</h2>
     
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