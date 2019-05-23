    
import React, { Component } from 'react';
import Link from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
    
      <div>
          <div className="container">

          <h3>Thank you for visiting LiveUp!!</h3>
         
          </div>
      </div>

    )
  }
}

export default connect(null, actions)(Signout);