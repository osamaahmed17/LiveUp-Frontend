import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Headers from './components/header'
import Footers from './components/footer'
import nameList from './views/nameList'
import { BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
        var self = this;
        axios.get('https://liveup.mybluemix.net/users',{ headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imluc2hhMTciLCJwYXNzd29yZCI6Imluc2hhMTciLCJ0d2lsaW9Ub2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNJc0ltTjBlU0k2SW5SM2FXeHBieTFtY0dFN2RqMHhJbjAuZXlKcWRHa2lPaUpUU3pobU1qWXdNRE5tWkdaaU1qSXdaak5pTTJFM1lXWTBNbU0xTjJZeFpqRXlMVEUxTlRVME5qTTNOVGNpTENKbmNtRnVkSE1pT25zaWFXUmxiblJwZEhraU9pSnBibk5vWVNJc0luWnBaR1Z2SWpwN0luSnZiMjBpT2lKamIyOXNJSEp2YjIwaWZYMHNJbWxoZENJNk1UVTFOVFEyTXpjMU55d2laWGh3SWpveE5UVTFORFkzTXpVM0xDSnBjM01pT2lKVFN6aG1Nall3TURObVpHWmlNakl3WmpOaU0yRTNZV1kwTW1NMU4yWXhaakV5SWl3aWMzVmlJam9pUVVObU9HSXhOMlV4WWpsbFlqaGtNbUk1WWpneU5ETXlZVFZtWmpZd1l6a3lOaUo5LklZekRKN09KMUZRNkdHNjdGT202X2RXOGh2NFRubm5oZzYwTWxwSXFjWWsiLCJpYXQiOjE1NTU0NjM3NTcsImV4cCI6MTU1NTQ2NzM1N30.j_4PdUIElC6WKMS0H1GoAC3-ZVJYh4OCL9eVj0qwZeY'}})
        .then(function (response) {
          self.setState({data: response.data})
        })
       .catch(function (error) {
          console.log(error);
       });
  }
  
  render() {
   
    return (
      <div className="App">
          <Headers/>
          <BrowserRouter>
          <Switch>
               <Route exact path="/" component={nameList} />
          </Switch>
          <Footers/>
          </BrowserRouter>
      </div>
    );
  }
}



export default App;
