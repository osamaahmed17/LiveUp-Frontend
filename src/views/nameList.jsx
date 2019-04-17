import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Cards from '../components/Cards/Cards'




class NameList extends Component {

  render() {
    console.log(this.props.name)
    return (
      <div className="nameList">
        {this.props.name.map((value,key) => {
          return (
            <div>
              <Cards key={value._id} data={value} />
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default NameList;