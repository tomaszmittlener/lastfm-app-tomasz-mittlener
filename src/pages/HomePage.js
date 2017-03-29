require('../styles/HomePage.scss');

import React from 'react'
import _ from 'lodash'

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      userTopTracks: []

    };
  }

  componentWillMount(){
    fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=flykiller&api_key=df54e5ba8935c222214a98fd3b818a43&format=json').then(
      response => response.json()).then( response => {
      this.setState({userTopTracks: response.toptracks.track})
    });
  }

  render(){
    let topTracksNames = _.map(this.state.userTopTracks, 'name');

    return(
      <div>
        <ul>
          {_.map(topTracksNames, (object, index) => <li key={index}>{object}</li>)}
        </ul>
      </div>)
  }

}

export default HomePage;
