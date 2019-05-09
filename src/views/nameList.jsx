import React, { Component } from 'react';
import requireAuth from './requireAuth';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Cards from '../components/Cards'




class NameList extends Component {

  render() {
  console.log(this.props.name)
    return (
      <div className="nameList">
        {this.props.name.map((value,key) => {
          return (
            <div>
              <Cards key={value.username} data={value} />
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default requireAuth(NameList);