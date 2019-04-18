import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import M from 'materialize-css'





class Modal extends Component {


    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { opacity: 1 });

    }

    render() {
        //  console.log(this.props.name)
        return (
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <p>{this.props.username}</p>
                    </div>
                    <div className="modal modal-fixed-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Call</a>
            </div>
        );
    }
}

export default Modal;