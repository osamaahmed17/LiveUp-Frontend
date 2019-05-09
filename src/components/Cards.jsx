import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import VideoComponent from './VideoComponent';
import M from 'materialize-css'
import { Form, Button, Modal} from 'react-bootstrap';
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
    }


    render() {
        console.log(this.props.data.username)

        return (
       
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
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

                                     
                           
                        </div>
                    </div>
  
            </div>
        );
    }
}

export default nameList;