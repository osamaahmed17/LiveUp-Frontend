import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import M from 'materialize-css'
import { Form, Button, Modal } from 'react-bootstrap';
import Video from "twilio-video";
import '../App.css'



class nameList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newusername: '',
            newtoken: '',
            show: '',
            identity: null,
			roomName: 'Launchpad',
            localMediaAvailable: false,
            hasJoinedRoom: false,
            activeRoom: null
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);



        this.joinRoom = this.joinRoom.bind(this);
     
        this.roomJoined = this.roomJoined.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { opacity: 1 });
    }
    
    joinRoom() {
        console.log("Joining room '" + this.state.roomName + "'...");
        let connectOptions = {
            name: this.state.roomName
        };
        Video.connect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzRhZDg0MzA3YmEyZDVlM2UyODE4ZTlmMDIzOGEwOTFmLTE1NTczOTU1NTgiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJjaXR5IiwidmlkZW8iOnsicm9vbSI6IkxhdW5jaHBhZCJ9fSwiaWF0IjoxNTU3Mzk1NTU4LCJleHAiOjE1NTczOTkxNTgsImlzcyI6IlNLNGFkODQzMDdiYTJkNWUzZTI4MThlOWYwMjM4YTA5MWYiLCJzdWIiOiJBQ2JmMWU3MjMwOTM1YzIxZGI4ZGQxZDhmMTg4Mzg2NzY3In0.tQpnaoGcPkY5WKVNVb1LnVYyTFxaEjOmZ3ZhNrbYaEI", connectOptions).then(this.roomJoined, error => {
            alert('Could not connect to Twilio: ' + error.message);
        });
    }
    roomJoined(room) {
        // Called when a participant joins a room
        console.log("Joined as '" + this.state.identity + "'");
        this.setState({
            activeRoom: room,
            localMediaAvailable: true,
            hasJoinedRoom: true  // Removes ‘Join Room’ button and shows ‘Leave Room’
        });
    }



    render() {


        let joinOrLeaveRoomButton = this.state.hasJoinedRoom ? (
            <Button secondary={true} onClick={() => alert("Leave Room")} >Leave Room</Button>) : (
                <Button onClick={this.joinRoom}>Join Room</Button>);
        let userMessage;
        if (this.state.show === true) {
            console.log("Opened")
            userMessage = (
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                      
                        <div className="flex-item" ref="remoteMedia" id="remote-media" />
                        {joinOrLeaveRoomButton}
                    </Modal.Body>
                    <Button variant="secondary" onClick={this.handleClose}>
                    </Button>
                </Modal>
            )
        }
        if (this.state.show === false) {
            console.log("Closed")
            userMessage = (
                <h1></h1>
            )
        }
        return (

            <div>

                <div className="row">
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>{this.props.data.username}</p>
                            </div>
                            <Form className="col-lg-12">
                                <Button variant="primary" onClick={this.handleShow} >
                                    Call
                                </Button>
                            </Form>
                        </div>
                        <div>
                            {userMessage}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default nameList;