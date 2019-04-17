import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Headers from './components/header'
import Footers from './components/footer'
import nameList from './views/nameList'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LoadingComponent from './components/loading/loading'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
        var self = this;
        axios.get('https://liveup.mybluemix.net/users')
        .then(function (response) {
          self.setState({data: response.data})
        })
       .catch(function (error) {
          console.log(error);
       });
  }
  
  render() {
    if(this.state.data==null)
    return (<LoadingComponent />);
    return (
      <div className="App">
    
          <Headers/>
          <BrowserRouter>
          <Switch>
               <Route exact path="/" component={nameList} users={this.state.data}/>
          </Switch>
          <Footers/>
          </BrowserRouter>
      </div>
    );
  }
}



export default App;
