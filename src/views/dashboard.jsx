import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import DashboardCard from '../components/dashboardcard'



class Dashboard extends Component {
  
    render() {
      

        return (
           
          <div className="col-sm">
            <div className="nameList">
                    {this.props.name.map((value, key) => {
                        return (
                            <div>
                                <DashboardCard key={value._id} data={value}/>
                            </div>
                        )

                    })
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard;