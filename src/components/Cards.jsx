import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import VideoComponent from './VideoComponent';
import M from 'materialize-css'
<<<<<<< HEAD
import { Form, Button } from 'react-bootstrap';
=======
import { Form, Button, Modal} from 'react-bootstrap';
>>>>>>> 3b42bec2d61678e7d5776d2852ff56230df0c4f7
class nameList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newusername: '',
            newtoken: ''

        }
        this.onPress = this.onPress.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);



    }
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    onPress(e) {
        e.preventDefault();
        console.log("I am pressed")

    }

    componentDidMount() {

        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { opacity: 1 });
<<<<<<< HEAD
        this.setState({

            newusername: this.props.data.username,
            //newtoken: this.props.data.username
           
         
          });
          //console.log("hello token"+this.state.newtoken);
          //console.log("hello"+this.props.data.twilioToken);
    
=======
>>>>>>> 3b42bec2d61678e7d5776d2852ff56230df0c4f7
    }


    render() {
        console.log(this.props.data.username)

        return (
       
            <div>
<<<<<<< HEAD
       
          


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
=======
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                   </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>{this.props.data.username}</p>
                            </div>
                            <Form onSubmit={this.onPress} className="col-lg-6">
                                <Button variant="primary" onClick={this.handleShow}>
                                    Launch demo modal
                                </Button>
                            </Form>
                        </div>
>>>>>>> 3b42bec2d61678e7d5776d2852ff56230df0c4f7

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