import React from 'react';
import _ from 'lodash';
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
      artistsToDisplay: nextProps.tracks.artist
    })
  }

  _sortAlphabetically() {
    let alphaSortedArtists= _.sortBy(this.state.artistsToDisplay, 'name');

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

          <button className="list__filter"
                  onClick={this._sortAlphabetically.bind(this)}>| a-z |</button>
        </div>

        <div className="list__items">

          {_.map(artistsToDisplay, (item, index) =>
            <div className="list-item"
                 key={index}>

              <img className="list-item__image" src={item.image[1]['#text']}/>

              <div className="list-item__text-container">

                <h3 className="list-item__name-bold">{item.name}</h3>

              </div>
            </div>
          )}
        </div>
      </List>
    )
  }
}

export default ArtistsList;
