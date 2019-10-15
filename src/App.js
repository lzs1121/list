import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShowImage from './components/ShowImage';
import Quiz from './components/Question';
import QuestionA from './components/QuestionA'
import QuestionB from './components/QuestionB';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/img"  component={ShowImage}></Route>
            <Route path="/" exact component={Quiz}></Route>
            <Route path="/questionA" component={QuestionA}></Route>
            <Route path="/questionB" component={QuestionB}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
