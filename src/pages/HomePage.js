import React from 'react';
import _ from 'lodash';

import {getUserTopTracks} from '../services/getApiData'

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      userTopTracks: []
    };
  }

  componentWillMount(){
    getUserTopTracks().then(trackList => {
      this.setState({userTopTracks: trackList.toptracks.track})
    })
  }

  render(){
    let topTracksNames = _.map(this.state.userTopTracks, 'name');

    return(
      <div className="main-container">
        <div className="left-element">LEFT ELEMENT</div>
        <div className="right-element">
          <ul>
            {_.map(topTracksNames, (object, index) => <li key={index}>{object}</li>)}
          </ul>
        </div>
      </div>)
  }
}

export default HomePage;
