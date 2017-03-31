import React from 'react';
import {Link} from 'react-router-dom'
import _ from 'lodash';
import List from './List'

class TracksList extends React.Component {
  constructor() {
    super();
  }

  render() {

    return(
      <List className="TracksList">

        {_.map(this.props.topTracks, (item, index) =>
          <div className="list-row__track" key = {index} >
            <div className = "list-row__track__element--image">
              <img src = {item.image[0]['#text']}/>
            </div>
            <div className = "list-row__track__element--info">
              <div className = "list-row__track__element--info__artist">
                <Link to = {`/artists/${item.artist.mbid}`}>{item.artist.name}</Link>
              </div>
              <div className = "list-row__track__element--info__track">
                <Link to = {`/tracks/${item.mbid}`}>{item.name}</Link>
              </div>
              <div className = "list-row__track__element--info__album">
                <Link to = {`/tracks/${item.mbid}`}>({item.album})</Link>
              </div>
            </div>
          </div>
        )}

      </List>
    )
  }
}


export default TracksList;
