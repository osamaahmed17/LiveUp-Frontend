import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import M from 'materialize-css'
import { Form, Button, Modal } from 'react-bootstrap';
import Video from "twilio-video";
import "../App.css"
import axios from "axios"
import socketIO from 'socket.io-client';



class nameList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newusername: this.props.data.username,
            newtoken: '',
            show: '',

            newcaller: '',
            newcalled: ''

        }
        this.activeRoom = null;
        this.previewTracks = null;
        this.identity = null;
        this.roomName = 'Launchpad';

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.roomJoined = this.roomJoined.bind(this);


    }
    handleClose() {
        this.setState({ show: false });
        console.log(this.activeRoom)
        if (this.activeRoom) {
            this.activeRoom.disconnect();

        }
        console.log("Closed")

        var socket = socketIO("https://liveup.mybluemix.net");
        socket.emit('Data', { showstate: 'close',username:'' }, function (data, err) {
                console.log(err);
              })
    }

    handleShow() {
        var self = this
        this.setState({ show: true });
        var localTracksPromise = this.previewTracks
            ? Promise.resolve(this.previewTracks)
            : Video.createLocalTracks();
        localTracksPromise.then(
            (tracks) => {
                window.previewTracks = this.previewTracks = tracks;
                var previewContainer = document.getElementById("local-media");
                if (!previewContainer.querySelector("video") && !self.state.show) {
                    this.attachTracks(tracks, previewContainer);
                }

            },
            (error) => {
                console.log(error)
            }
        );
        let connectOptions = {
            name: this.roomName
        };
        if (this.state.previewTracks) {
            connectOptions.tracks = this.state.previewTracks;
        }
        Video.connect(this.state.newtoken, connectOptions).then(this.roomJoined, error => {
            alert('Could not connect to Twilio: ' + error.message);
        });
        var socket = socketIO("https://liveup.mybluemix.net");
        socket.emit('Data', { showstate: 'open',username:localStorage.getItem('user') }, function (data, err) {
                console.log(err);
              })


    }

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { opacity: 1 });
        var self = this;
        axios.post('https://liveup.mybluemix.net/token', {
            username: self.state.newusername
        })
            .then(function (response) {

                self.setState({ newtoken: response.data });
                console.log(self.state.newtoken)

            }).catch(function (error) {
                console.log(error);
            })


      
    }



    attachTracks(tracks, container) {
        tracks.forEach(track => {
            container.appendChild(track.attach());
        });
    }
    attachParticipantTracks(participant, container) {
        console.log(participant)
        var tracks = Array.from(participant.tracks.values());
        this.attachTracks(tracks, container);
    }

    detachParticipantTracks(participant) {
        var tracks = Array.from(participant.tracks.values());
        tracks.forEach(track => {
            track.detach().forEach(detachedElement => {
                detachedElement.remove();
            });
        })

    }
    isArrayEmpty(array) {
        return !Array.isArray(array) || !array.length
    }
    roomJoined(room) {
        console.log(room)
        this.activeRoom = room;
        window.room = room.name;
        // Called when a participant joins a room

        if (this.refs.localMedia) {
            var previewContainer = this.refs.localMedia
            if (!previewContainer.querySelector("video")) {
                this.attachParticipantTracks(room.localParticipant, previewContainer);
            }
            room.participants.forEach(participant => {
                console.log("Already in Room: '" + participant.identity + "'");
                var previewContainer = this.refs.remoteMedia;
                this.attachParticipantTracks(participant, previewContainer);
            });
            room.on('participantConnected', participant => {
                console.log("Joining: '" + participant.identity + "'");
            });

            room.on('trackAdded', (track, participant) => {
                var previewContainer = this.refs.remoteMedia;
                this.attachTracks([track], previewContainer);
            });



            room.on('participantDisconnected', participant => {
                console.log("Participant '" + participant.identity + "' left the room");
                this.detachParticipantTracks(participant);
            });

            room.on('disconnected', () => {
                if (this.previewTracks) {
                    this.previewTracks.forEach(track => {
                        track.stop();
                    });
                }
                this.detachParticipantTracks(room.localParticipant);
                room.participants.forEach(this.detachParticipantTracks);
                this.activeRoom = null;
                this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
            });
        }



    }




    render() {
        let userMessage;
        if (this.state.show === true) {
            userMessage = (
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                        <div id="remote-media"></div>
                        <div id="controls">
                            <div id="preview">
                                <div ref="localMedia" id="local-media" className="myvideo"></div>
                                <div className="flex-item" ref="remoteMedia" id="remote-media" className="myvideo" />
                            </div>
                        </div>
                    </Modal.Body>
                    <Button variant="secondary" onClick={this.handleClose}>Close
                    </Button>
                </Modal>
            )
        }
        return (

            <div>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-content">
                                <h5>{this.props.data.username}</h5>
                                <h6>{this.props.data.country}</h6>
                            </div>
                            <Form className="col-lg-12">
                                <a onClick={this.handleShow} className="btn-floating btn-medium waves-effect app-btn"><i className="material-icons">call</i></a>
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