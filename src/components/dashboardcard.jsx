import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import user from '../images/user.ico';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';



class DashboardCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.data.username,
            country: this.props.data.country,
            fullname: this.props.data.fullname


        }
        this.onSubmit = this.onSubmit.bind(this);

    }
    onSubmit(e) {
        e.preventDefault();
        var self = this;
        axios.post('https://liveup.mybluemix.net/users/delete', {
            username: self.state.username
        })
            .then(function (response) {
                //console.log(response.data.user)
                self.setState({
                    username: ''
                })
 
                console.log(self.state.username)
            }).catch(function (error) {
                console.log(error);
            })
    }

    render() {
        console.log(this.state.username)
        return (


            <div className="container">

            <div id="updatemodal" class="modal">
            <div class="modal-content">
            <Form  onSubmit={this.onSubmit} id="update-form">
                                    <div className="form-header">
                                       Update User
                                        </div>
                                            <Form.Control type="text" placeholder="Username" className="username" onChange={this.handleChangeUsername} />
                                            <Form.Control type="password" placeholder="Password" className="password" onChange={this.handleChangePassword} />
                                            <Form.Control type="text" placeholder="Full Name" className="fullname" onChange={this.handleChangeFullName} />
                                            <Form.Control type="text" placeholder="Country" className="country" onChange={this.handleChangeCountry} />
                                        <div className="row">
                                        <div className="col-lg-12">
                                            <Button variant="primary" type="submit" className="text-capitalize modal-close">Update</Button>
                                          
                                        </div>
                                    </div>
                                </Form>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
             
                <div className="card dashcard">
                    <div className="card-image cardimg">
                        <img src={user} />
                    </div>
                    <div className="card-content">
                        <ul>
                            <li> <p><b>Username:</b>{this.state.username}</p></li>
                            <li><p><b>Full Name:</b>{this.state.fullname}</p></li>
                            <li><p><b>Country:</b>{this.state.country}</p></li>
                        </ul>
                    </div>
                    <div className="dash-card-btn">
                        <div className="row">
                        <Form onSubmit={this.onSubmit} className="col-lg-6">
                            <Button variant="primary" type="submit" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">delete</i></Button>
                        </Form>
                        <Form onSubmit={this.onSubmit} className="col-lg-6">
                            <Button variant="primary" type="submit" className="btn-floating btn-large waves-effect waves-light blue btn modal-trigger" data-target="updatemodal"><i className="material-icons">edit</i></Button>
                        </Form>
                        </div>
                    </div>
                </div>
                </div>

        );
    }
}

export default DashboardCard;