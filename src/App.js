import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Headers from './components/header'
import Footers from './components/footer'
import NameList from './views/nameList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoadingComponent from './components/loading/loading'
import Signin from './views/signin/signin'
import Signup from './views/signup/signup'
import Dashboard from './views/dashboard'
import Favicon from 'react-favicon';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'


const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
);
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
      <Provider store={store}>
        <div className="App">
          <Favicon url="" />
          <Headers />
          <BrowserRouter>
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route exact path='/namelist' render={(props) => <NameList name={this.state.data} />} />
              <Route path="/dashboard" render={(...props) => <Dashboard name={this.state.data} />} /> />
          </Switch>
            <Footers />
          </BrowserRouter>
        </div>
      </Provider>
    );

  }

}



export default App;
