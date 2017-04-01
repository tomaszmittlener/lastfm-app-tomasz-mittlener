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
        <button onClick={this._sortAlphabetically.bind(this)}>| a-z |</button>
        <button onClick={this._groupByArtist.bind(this)}>by artist |</button>

        {_.map(tracksToDisplay, (item, index) =>
          <div className="list-row" key = {index} >
            <div className = "list-row__image-container">
              <img src = {item.image[1]['#text']}/>
            </div>
            <div className = "list-row__text-container">
              <div className = "list-row__text-container__track">
                {item.mbid ? <Link to = {`/tracks/${item.mbid}`}>{item.name}</Link> : <div>{item.name}</div>}
              </div>
              <div className = "list-row__text-container__artist">
                {item.artist.mbid ?
                  <Link className="link list-item__name" to={`/artists/${item.artist.mbid}`}>{item.artist.name}</Link> :
                  <h3 className="list-item__name">{item.artist.name}</h3>}
              </div>
              <div className = "list-row__text-container__album">
                 <div>{item.album}</div>
              </div>
            </div>
          </div>
        )}

      </List>
    )
  }
}

export default TracksList;
