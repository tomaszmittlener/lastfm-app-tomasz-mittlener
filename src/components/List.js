import React from 'react';
import _ from 'lodash';


class HomePage extends React.Component {
  constructor() {
    super();
    }

  render() {
    return(
      <div>
        <ul>
        {_.map(this.props.TopTracks.track, (track, index) => <li key={index}><img src={track.image[0]['#text']}/> {track.artist.name} - {track.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default HomePage;
