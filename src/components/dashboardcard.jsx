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
                        <Form onSubmit={this.onSubmit}>
                            <Button variant="primary" type="submit" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">delete</i></Button>
                        </Form>
                        <Form onSubmit={this.onSubmit}>
                            <Button variant="primary" type="submit" className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">edit</i></Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardCard;