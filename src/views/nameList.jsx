import React, { Component } from 'react';
import requireAuth from './requireAuth';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import Cards from '../components/Cards'




class NameList extends Component {

  render() {
  console.log(this.props.name)
    return (
      <div className="nameList">
<<<<<<< HEAD
        <h1><b>Welcome</b>{localStorage.getItem('user')}</h1>
        <div className="container">
        <div className="row">
=======
>>>>>>> 3b42bec2d61678e7d5776d2852ff56230df0c4f7
        {this.props.name.map((value,key) => {
          return (
            <div className="col-lg-4">
            
              <Cards key={value.username} data={value} />
      
            </div>
          )
        })
        }
        </div>
      </div>
      </div>
    );
  }
}

export default requireAuth(NameList);