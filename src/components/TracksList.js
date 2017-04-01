import React from 'react';
import {Link} from 'react-router-dom'
import _ from 'lodash';
import List from './List'

class TracksList extends React.Component {
  constructor() {
    super();
    this.state = {
      tracksToDisplay:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tracksToDisplay: nextProps.tracks
    })
  }

  _sortAlphabetically() {
    let alphaSortedTracks= _.sortBy(this.state.tracksToDisplay, 'name');

    this.setState({
      tracksToDisplay: alphaSortedTracks
    })

  }

  _groupByArtist() {
    let artistsGroupedTracks = _.sortBy(this.state.tracksToDisplay, track => track.artist.name);

    this.setState({
      tracksToDisplay: artistsGroupedTracks
    })

  }

  render() {
    let {tracksToDisplay} = this.state;

    return(
      <List className="TracksList">
        {this.props.children}
        <button onClick={this._sortAlphabetically.bind(this)}>alphabetic</button>
        <button onClick={this._groupByArtist.bind(this)}>group by artist</button>

        {_.map(tracksToDisplay, (item, index) =>
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
