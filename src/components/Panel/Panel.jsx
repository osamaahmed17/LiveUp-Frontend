import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import M from 'materialize-css';



class Panel extends Component {
    componentDidMount() {
        M.AutoInit();
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, { accordion: true });


    }
    
    render() {
        const divStyle = {
            margin:"20px"
          };

        return (

            <ul className="collapsible">
                <li>
                    <div className="collapsible-header">{this.props.data.username}</div>
                    <div className="collapsible-body">
                        <ul>
                            <li>
                                
                               <span style={divStyle}><a class="waves-effect waves-light btn">Delete</a></span> 
                               <span style={divStyle}><a class="waves-effect waves-light btn">Update</a></span>

                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

        );
    }
}

export default Panel;