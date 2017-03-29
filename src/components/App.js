require('normalize.css/normalize.css');
require('../styles/main.scss');

import { Route } from 'react-router-dom';
import React from 'react';

import HomePage from '../pages/HomePage';

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Route exact path="/" component={HomePage}/>
      </div>
    );
  }
}

export default App;
