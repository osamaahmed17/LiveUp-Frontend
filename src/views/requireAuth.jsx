import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history'



export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        if(!this.props.history){
          const history = createHashHistory()
          history.goBack()
        }
        else{
          this.props.history.push('/');
        }
       
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};