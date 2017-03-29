require('normalize.css/normalize.css');

import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SecondPage from '../pages/SecondPage';

import React from 'react';


class App extends React.Component {


  render() {
    return (
      <div className="wrapper">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/secondPage" component={SecondPage}/>

      </div>
    );
  }
}


export default App;
