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
        Artist Page: {this.state.artistInfo.name}
      </Page>
    )
  }
}

export default ArtistPage;
