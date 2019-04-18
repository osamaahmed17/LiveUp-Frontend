import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import M from 'materialize-css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../images/user.ico';



class DashboardCard extends Component {


    render() {

        return (

            
            <div class="container">
                    <div className="card dashcard">
                        <div className="card-image cardimg">
                            <img src={user} />

                            
                        </div>
                        <div className="card-content">
                            <ul>
                               <li><p><b>UserID:</b>{this.props.data._id}</p></li>
                               <li> <p><b>Username:</b>{this.props.data.username}</p></li>
                               <li><p><b>First Name:</b>{this.props.data.firstname}</p></li>
                               <li><p><b>Last name:</b>{this.props.data.lastname}</p></li>
                               <li><p><b>Country:</b>{this.props.data.country}</p></li>
                            </ul>
                        </div>
                        <div class="dash-card-btn">
                        <a className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">edit</i></a>
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">delete</i></a>
                        </div>
                    </div>

        </div>
        );
    }
}

export default DashboardCard;