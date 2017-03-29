import React from 'react';
import _ from 'lodash';

import {getUserTopTracks} from '../services/getData'

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      userTopTracks: []
    };
  }

  componentDidMount() {
    getUserTopTracks(this.props.match.params.username).then(trackList => {
      this.setState({
        userTopTracks: trackList.toptracks.track
      });
    });
  }


  render() {
    return(
      <div className="main-container">
        <div className="left-element">LEFT ELEMENT</div>
        <div className="right-element">
          <ul>
            {_.map(this.state.userTopTracks, (track, index) => <li key={index}>{track.name}</li>)}
          </ul>
        </div>
      </div>)
  }
}

export default HomePage;
