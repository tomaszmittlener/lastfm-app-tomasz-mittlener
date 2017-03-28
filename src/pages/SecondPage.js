
import React from 'react'
import {Link} from 'react-router-dom'

class SecondPage extends React.Component {
  constructor(){
    super();

  }

  render(){
    return(
      <div>
        <span>Second Page</span>
        <Link to="/">Main Page</Link>
      </div>)
  }

}

export default SecondPage;
