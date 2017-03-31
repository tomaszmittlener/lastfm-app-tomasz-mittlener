import React from 'react';

import Page from '../components/Page';
import { getTrackInfo } from '../services/getData';


class TrackPage extends React.Component {
  constructor() {
    super();
    this.state = {
      trackInfo: {},
      trackArtistInfo: {}
    }
  }

  componentDidMount() {

    getTrackInfo(this.props.match.params.trackId).then(trackInfo => {
      this.setState({
        trackInfo: trackInfo.track,
        trackArtistInfo: trackInfo.track.artist
      })
    })
  }

  render() {

    return(
      <Page>
        Track Page: {this.state.trackInfo.name} by {this.state.trackArtistInfo.name}
      </Page>
    )
  }
}

export default TrackPage;
