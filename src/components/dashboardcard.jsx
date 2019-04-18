import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import M from 'materialize-css';
import imran from '../images/user.png';



class DashboardCard extends Component {


    render() {

        return (
            <div className="row">
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={imran} />

                            
                        </div>
                        <div className="card-content">
                        <h5>hi</h5>
                            <ul>
                               <li> <p><b>Username:</b>{this.props.data.username}</p></li>
                               <li><p><b>First Name:</b>{this.props.data.firstname}</p></li>
                               <li><p><b>Username:</b>{this.props.data.lastname}</p></li>
                               <li><p><b>Username:</b>{this.props.data.country}</p></li>
                            </ul>
                        </div>
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">edit</i></a>
                            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">delete</i></a>
                    </div>
                </div>
            </div>

        );
    }
}

export default DashboardCard;