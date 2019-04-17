import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Cards from '../components/Cards/Cards'




class NameList extends Component {

  render() {
    console.log(this.props.name)
    return (
       <Cards></Cards>
    );
  }
}

export default NameList;