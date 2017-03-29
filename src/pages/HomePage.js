require('../styles/HomePage.scss');


import React from 'react'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
  constructor(){
    super();
   }

  render(){
    let helloCollection = [];
    _.times(2,()=>{
      helloCollection.push('hello')
    });
    return(
    <div>
      {helloCollection}
      <span>TEST</span>
      <Link to="/secondPage">Second Page</Link>

    </div>)
  }

}

export default HomePage;
