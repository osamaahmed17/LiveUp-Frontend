import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'


class nameList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            
                            <div className="card-content">
                                <p>{this.props.data.username}</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default nameList;