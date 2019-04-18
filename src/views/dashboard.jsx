import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Panel from '../components/Panel/Panel'
import M from 'materialize-css'; 



class Dashboard extends Component {
    componentDidMount() {
       // M.AutoInit();
       var elems = document.querySelectorAll('.collapsible');
       M.Collapsible.init(elems, {accordion:true});
           
    
    }
    render() {
        const divStyle = {
            margin:"20px"
          };

        return (
           
          <div className="col-sm">
            <div className="nameList">
                    {this.props.name.map((value, key) => {
                        return (
                            <div>
                                <Panel key={value._id} data={value}/>
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