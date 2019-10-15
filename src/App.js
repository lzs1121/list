import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShowImage from './components/ShowImage';
import Quiz from './components/Question';
import CheckOne from './components/CheckOne'

class App extends Component {
  render() {
    return (
      <div>
          <p>test</p>
          <Switch>
            <Route path="/img"  component={ShowImage}></Route>
            <Route path="/" exact component={Quiz}></Route>
            <Route path="/checkOne" component={CheckOne}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
