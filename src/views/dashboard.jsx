import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import DashboardCard from '../components/dashboardcard'
import { Link } from 'react-router-dom'
class Dashboard extends Component {
  
    render() {
        return (
        <div >
            <div className="nameList" class="row">
                    {this.props.name.map((value, key) => {
                        return (
                            <div class="col-lg-4">
                                <DashboardCard key={value._id} data={value}/>
                            </div>
                            )}
                    )}
            </div>
            <div class="row">
                <div class="dash-btn">
                    <a className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">add</i></a>
                    <Link to="/namelist">
                        <a className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">call</i></a>
                    </Link>
                </div>
            </div>
        </div>
        );
    }
}

export default Dashboard;