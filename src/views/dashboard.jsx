import React, { Component } from 'react';
import requireAuth from './requireAuth';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import DashboardCard from '../components/dashboardcard'
import { Link } from 'react-router-dom'
import M from "materialize-css";
import { Form, Button } from 'react-bootstrap';
import './dashboard.css'
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fullname: '',
            country: '',
            name:this.props.name,
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    handleChangeUsername(e) {
        this.setState({ username: e.target.value });
    }
    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    handleChangeFullName(e) {
        this.setState({ fullname: e.target.value });
    }
    handleChangeCountry(e) {
        this.setState({ country: e.target.value });
    }


    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { opacity: 0.5 });

       
    }
   
    onSubmit(e) {
        var self = this;
        e.preventDefault();
        axios.post('https://liveup.mybluemix.net/users/signup', {
            username: this.state.username,
            password: this.state.password,
            fullname: this.state.fullname,
            country: this.state.country
          })
          .then(function (response) {
            //console.log(response.data.user)
            self.setState({
                    response:response
            })
            const current= self.state.name;
            const newname = current.concat(response.data.user);
            self.setState({ name: newname });
            console.log(self.state.name)
        }).catch(function (error) {
            console.log(error);
          })
          
         

        
    }
    render() {
        return (
            <div >
                <h1><b>Welcome</b> {localStorage.getItem('user')}</h1>
                <div className="List" >
                    {this.state.name.map((value, key) => {
                        return (
                            <div className="col-lg-4">
                                <DashboardCard key={value.username} data={value} />
                            </div>
                        )
                    }
                    )}
                </div>
                <div className="row">
                    <div className="dash-btn">
                        <a className="btn-floating btn-large waves-effect waves-light blue modal-trigger" href="#modal1"><i className="material-icons">add</i></a>
                        <Link to="/namelist">
                            <a className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">call</i></a>
                        </Link>
                    </div>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <div className="Add">
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <Form  onSubmit={this.onSubmit}>
                                    <div className="form-header">
                                        Add User
                                        </div>
                                            <Form.Control type="text" placeholder="Username" className="username" onChange={this.handleChangeUsername} />
                                            <Form.Control type="password" placeholder="Password" className="password" onChange={this.handleChangePassword} />
                                            <Form.Control type="text" placeholder="Full Name" className="fullname" onChange={this.handleChangeFullName} />
                                            <Form.Control type="text" placeholder="Country" className="country" onChange={this.handleChangeCountry} />
                                        <div className="row">
                                        <div className="col-lg-12">
                                            <Button variant="primary" type="submit"  className="text-capitalize">Add</Button>
                                          
                                        </div>
                                    </div>
                                </Form>
                            </div>
                            <div className="col-lg-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default requireAuth(Dashboard);