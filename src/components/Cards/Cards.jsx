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
                            <div className="card-image">
                                <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                                <p>I am just a randomn Card</p>
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