import React from 'react';

import Page from '../components/Page';
import { getTrackInfo } from '../services/getData';


class TrackPage extends React.Component {
  constructor() {
    super();
    this.state= {
      trackInfo: {}
    }
  }

  componentDidMount() {
    getTrackInfo(this.props.match.params.trackId).then(trackInfo => {
      this.setState({
        trackInfo: trackInfo
      })
    })
  }

  render() {

    return(
      <Page>
        Track Page: {this.state.trackInfo.track.name}  by {this.state.trackInfo.track.artist.name}
      </Page>
    )
  }
}

export default TrackPage;
