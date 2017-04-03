import React from 'react';

import map from 'lodash/map';
import sortBy from 'lodash/sortBy'

import List from './List'

class ArtistsList extends React.Component {
  constructor() {
    super();
    this.state = {
      artistsToDisplay:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      artistsToDisplay: nextProps.artists.artist
    })
  }

  _sortAlphabetically() {
    let alphaSortedArtists= sortBy(this.state.artistsToDisplay, 'name');

    this.setState({
      artistsToDisplay: alphaSortedArtists
    })

  }

  render() {
    let {artistsToDisplay} = this.state;

    return(
      <List className="list--artist-list">
        <div className="list__filters">
          {this.props.children}
          <div className="list__sort-filters">
          <button className="list__filter"
                  onClick={this._sortAlphabetically.bind(this)}>| <span>a-z</span> |</button>
          </div>
        </div>

        <div className="list__items">

          {map(artistsToDisplay, (item, index) =>
            <div className="list-item"
                 key={index}>

              <img className="list-item__image" src={item.image[1]['#text']}/>

              <div className="list-item__text-container">

                <h3 className="list-item__name">{item.name}</h3>

              </div>
            </div>
          )}
        </div>
      </List>
    )
  }
}

export default ArtistsList;

ArtistsList.propTypes = {
  artists: React.PropTypes.object
};
