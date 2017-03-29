require('normalize.css/normalize.css');
require('../styles/main.scss');

import { Route } from 'react-router-dom';
import React from 'react';

import HomePage from '../pages/HomePage';
import TopTracks from '../pages/TopTracks';


class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/toptracks/:username" component={TopTracks}/>

      </div>
    );
  }
}

export default App;
