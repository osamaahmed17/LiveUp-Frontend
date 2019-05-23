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
            fullname: this.props.data.fullname,
            newusername: ''


        }
        this.onSubmit = this.onSubmit.bind(this);

    }
  

    onSubmit(e,someParameter) {
        e.preventDefault();
        this.props.edit(someParameter);
    }

    render() {


        return (
            <div >
                <div id="updatemodal" className="modal">
                    <div className="modal-content">
                        <Form onSubmit={this.onSubmit} >
                            <div className="form-header">
                                Updata
                                        </div>
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
                </div>
                <div className="card dashcard">
                    <div className="card-image cardimg">
                        <img src={user} alt="Profile" />
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
                            <Form  className="col-lg-6">
                                 <a onClick={(e) => {this.onSubmit(e, this.state.username)}} className="btn-floating btn-medium waves-effect red" ><i className="material-icons">delete</i></a> 
                            </Form>
                            <Form onSubmit={this.onSubmit} className="col-lg-6">
                                <a onClick={this.handleShow} className="btn-floating btn-medium waves-effect blue modal-trigger" data-target="updatemodal"><i className="material-icons">edit</i></a>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default DashboardCard;