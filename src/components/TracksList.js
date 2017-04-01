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

        {_.map(this.props.tracks, (item, index) =>
          <div className="list-row" key = {index} >
            <div className = "list-row__image-container">
              <img src = {item.image[1]['#text']}/>
            </div>
            <div className = "list-row__text-container">
              <div className = "list-row__text-container__track">
                <Link to = {`/tracks/${item.mbid}`}>{item.name}</Link>
              </div>
              <div className = "list-row__text-container__artist">
                <Link to = {`/artists/${item.artist.mbid}`}>{item.artist.name}</Link>
              </div>
              <div className = "list-row__text-container__album">
                <Link to = {`/tracks/${item.mbid}`}>{item.album}</Link>
              </div>
            </div>
          </div>
        )}

      </List>
    )
  }
}

export default TracksList;
