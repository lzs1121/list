import React, { Component, Children } from 'react';
import axios from 'axios';
import CheckOne from './CheckOne'
import { Link, Route } from 'react-router-dom'

class Quiz extends Component {
 state = {
  quizData: [],
 }

 loadData = () => {
  axios.get('/api/testData.json').then(res => {
   this.setState({ quizData: res.data.data });
   console.log("quizData:", res.data.data);
  })
  .catch(err => {
   console.log(err)
  })
 }

 componentDidMount() {
  this.loadData();
 }

 answer = () => {
  return (
   <div>
     <CheckOne askData={this.state.quizData}/>
   </div>
  )
 }

 render() {
  const { quizData } = this.state;
  return (
   <div>
    <ul>
     {quizData.map((q, index) => (
      <div key={index}>
       <li>
        {q.question}
       </li>
       <Link to="/CheckOne">
        <button onClick={() => this.answer()}>test</button>
       </Link>
       {/* <CheckOne askData={q}/> */}
      </div>
     ))}
    </ul>
   </div>
  );
 }
}

export default Quiz;