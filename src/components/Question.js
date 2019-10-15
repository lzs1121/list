import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Quiz extends Component {
 state = {
  quizA: null,
  quizB: null,
  questionA: null,
  questionB: null,
 }

loadData = () => {
   axios.get('/api/testData.json').then(res => {
   this.setState(() => { 
     return {
       quizA: res.data.data[0],
       questionA: res.data.data[0].question,
       quizB: res.data.data[1],
       questionB: res.data.data[1].question,
     }
     });
   console.log("quizA:", this.state.quizA);
   console.log("questionB", this.state.questionB);
  })
  .catch(err => {
   console.log(err)
  })

 }

 async componentDidMount() {
  await this.loadData();
 }

 render() {
  const { 
    quizA, 
    quizB, 
    questionA, 
    questionB 
  } = this.state;

  const locationA = {
   pathname:'/questionA',
   state: { quizA: quizA}
  }
  const locationB = {
    pathname:'/questionB',
    state: { quizB: quizB}
   }
  console.log("render questionA", questionA)

  return (
   <div>
    <ul>
       <li>
        <Link to={locationA}>
          {questionA}
        </Link>
       </li>
       <li>
        <Link to={locationB}>
          {questionB}
        </Link>
       </li>
    </ul>
   </div>
  );
 }
}

export default Quiz;