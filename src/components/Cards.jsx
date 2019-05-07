import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import VideoComponent from './VideoComponent';
import M from 'materialize-css'
class nameList extends Component {
    constructor(props){
        super(props)
        this.state={
          newusername:'',
          newtoken:''

        }
     
      }
      
    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { opacity: 1 });
        this.setState({

            newusername: this.props.data.username,
            newtoken: this.props.data.username
           
          });
    
    }


    render() {
    
        return (
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                       {/* <VideoComponent username={this.props.data.username} twiliotoken={this.props.data.twilioToken}/> */}
                    </div>
                    <div className="modal modal-fixed-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
                <div className="row">
                
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>{this.state.newusername}</p>
                            </div>
                            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Call</a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default nameList;