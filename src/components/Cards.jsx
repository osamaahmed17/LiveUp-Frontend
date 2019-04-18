import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import modal from '../components/modal'
class nameList extends Component {
   


    render() {
    
        return (
            <div>
            
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>{this.props.data.username}</p>
                            </div>
                           <modal username={this.props.data.username}></modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default nameList;