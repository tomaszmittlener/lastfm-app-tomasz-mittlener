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
        <div className="page__main-container__title">
          <span className="page__main-container__title__text">{this.state.trackInfo.name} by {this.state.trackArtistInfo.name}</span>
        </div>
      </Page>
    )
  }
}

export default TrackPage;
