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
      <List className="ArtistsList">
        {this.props.children}
        <button onClick={this._sortAlphabetically.bind(this)}>| a-z |</button>

        {_.map(artistsToDisplay, (item, index) =>
          <div className="list-row" key = {index}>

            <div className = "list-row__image-container">
              <img src = {item.image[1]['#text']}/>
            </div>

            <div className = "list-row__text-container">
              <div className = "list-row__text-container__artist">
                <div>{item.name}</div>
              </div>
            </div>

          </div>
        )}

      </List>
    )
  }
}

export default ArtistsList;
