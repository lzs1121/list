import React, { Component } from 'react';
import axios from 'axios'

class ShowImage extends Component {
 state = {
  imgLink: null,
 }

 loadImg = () => {
  axios.get('/api/testData.json').then(res => {
   this.setState({ imgLink: res.data.img[0].imgUrl})
   console.log('img', res.data.img[0].imgUrl)
  })
  .catch(err => {
   console.log(err)
  })
 }

 componentDidMount() {
  this.loadImg();
 }

 render() {
  const { imgLink } = this.state
  return (
    <div>
     <img src={imgLink} alt='quiz' />
    </div>
  );
 }
}

export default  ShowImage;