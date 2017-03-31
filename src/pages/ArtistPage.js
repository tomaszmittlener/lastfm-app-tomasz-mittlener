import React from 'react';

import Page from '../components/Page';
import { getArtistInfo } from '../services/getData';


class ArtistPage extends React.Component {
  constructor() {
    super();
    this.state = {
      artistInfo: {}
    }
  }

  componentDidMount() {
    getArtistInfo(this.props.match.params.artistId).then(artistInfo => {
      this.setState({
        artistInfo: artistInfo.artist
      })
    })
  }

  render() {

    return(
      <Page>
        <div className="page__main-container__title">
          <span className="page__main-container__title__text">{this.state.artistInfo.name}</span>
        </div>
      </Page>
    )
  }
}

export default ArtistPage;
