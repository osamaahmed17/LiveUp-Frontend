import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'


class nameList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>{this.props.data._id}</p>
                                <p>{this.props.data.username}</p>
                                <p>{this.props.data.firstname}</p>
                                <p>{this.props.data.lastname}</p>
                                <p>{this.props.data.country}</p>
                                <p>{this.props.data.usertype}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default nameList;