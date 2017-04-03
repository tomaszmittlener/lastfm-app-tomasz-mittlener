import React from 'react';
import {Link} from 'react-router-dom'
import map from 'lodash/map';
import sortBy from 'lodash/sortBy'

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
    let alphaSortedTracks= sortBy(this.state.tracksToDisplay, 'name');

    this.setState({
      tracksToDisplay: alphaSortedTracks
    })

  }

  _groupByArtist() {
    let artistsGroupedTracks = sortBy(this.state.tracksToDisplay, track => track.artist.name);

    this.setState({
      tracksToDisplay: artistsGroupedTracks
    })

  }

  render() {
    let {tracksToDisplay} = this.state;

    return(
      <List className="list--track-list">
        <div className="list__filters">
          {this.props.children}

          <div className="list__sort-filters">
            <button className="list__filter"
                    onClick={this._sortAlphabetically.bind(this)}>| <span>a-z</span> |</button>

            <button className="list__filter"
                    onClick={this._groupByArtist.bind(this)}><span>by artist</span> |</button>
          </div>
        </div>

        <div className="list__items">

          {map(tracksToDisplay, (item, index) =>
            <div className="list-item"
                 key = {index}>

              <img className="list-item__image" src = {item.image[1]['#text']}/>

              <div className = "list-item__text-container">

                {item.mbid ?
                  <h3 className="list-item__name"><Link className="link" to = {`/tracks/${item.mbid}`}>{item.name}</Link></h3> :
                  <h3 className=" list-item__name">{item.name}</h3>}

                {item.artist.mbid ?
                  <h4 className="list-item__name"><Link className="link" to={`/artists/${item.artist.mbid}`}>{item.artist.name}</Link></h4> :
                  <h4 className="list-item__name">{item.artist.name}</h4>}

                <h5 className="list-item__name">{item.album}</h5>

              </div>
            </div>
          )}
        </div>
      </List>
    )
  }
}

export default TracksList;

TracksList.propTypes = {
  tracks: React.PropTypes.array
};
