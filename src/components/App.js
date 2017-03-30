require('normalize.css/normalize.css');
require('../styles/main.scss');

import { Route } from 'react-router-dom';
import React from 'react';

import HomePage from '../pages/HomePage';
import TopTracks from '../pages/TopTracks';
import ArtistPage from '../pages/ArtistPage';
import TrackPage from '../pages/TrackPage';



class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/toptracks/:username" component={TopTracks}/>
        <Route exact path="/artists/:artistId" component={ArtistPage}/>
        <Route exact path="/tracks/:trackId" component={TrackPage}/>
      </div>
    );
  }
}

export default App;
