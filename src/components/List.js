import React from 'react';
import {Link} from 'react-router-dom'
import _ from 'lodash';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <ul>
          {_.map(this.props.TopTracks, (track, index) => (
            <li key={index}><img src={track.image[0]['#text']}/>
              <Link to={`/artists/${track.artist.name}`}>{track.artist.name}</Link> -
              <Link to={`/tracks/${track.artist.name}_${track.name}`}>{track.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default HomePage;
