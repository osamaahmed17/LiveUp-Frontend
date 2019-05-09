import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import VideoComponent from './VideoComponent';
import M from 'materialize-css'
import { Form, Button } from 'react-bootstrap';
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
            //newtoken: this.props.data.username
           
         
          });
          //console.log("hello token"+this.state.newtoken);
          //console.log("hello"+this.props.data.twilioToken);
    
    }


    render() {
    
        return (
       
            <div>
       
          


  <div id="modal1" class="modal">
    <div class="modal-content">
  
    <VideoComponent username={this.props.username} twiliotoken={this.props.data.twilioToken}/>
    </div>
    {/*<div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>*/}
  </div>
            
                
                    <div>
                        <div className="card">
                            <div className="card-content">
                                <p>{this.state.newusername}</p>
                                
                            </div>
                            <Form  onSubmit={this.onSubmit} id="add-form">
                              
                                         <div className="row">
                                        <div className="col-lg-12">

                                            <button data-target="modal1" class="btn modal-trigger" variant="primary" type="submit">Call this.props</button>
                                        </div>
                                    </div>
                                </Form>
                           
                        </div>
                    </div>
  
            </div>
        );
    }
}

export default nameList;