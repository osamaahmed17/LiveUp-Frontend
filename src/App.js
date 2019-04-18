import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Headers from './components/header'
import Footers from './components/footer'
import NameList from './views/nameList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoadingComponent from './components/loading/loading'
import Login from './views/login/login'
import Signup from './views/signup/signup'
import Dashboard from './views/dashboard'





class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      data2: 'hello'
    };
  }

  componentDidMount() {
   
    var self = this;
    axios.get('https://liveup.mybluemix.net/users')
      .then(function (response) {
        self.setState({ data: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.data == null)
      return (<LoadingComponent />);

    return (

      <div className="App">

          
        
        <Headers />
        <BrowserRouter>
          <Switch>


            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/namelist" render={(...props) => <NameList name={this.state.data} />} /> />
            <Route path="/dashboard" render={(...props) => <Dashboard name={this.state.data} />} /> />

  
          </Switch>
          <Footers />
        </BrowserRouter>
      </div>
    );
    
  }
  
}



export default App;
