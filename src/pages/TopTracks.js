import React from 'react';

import {getUserTopTracks, getTrackInfo} from '../services/getData';
import Page from '../components/Page';
import TracksList from '../components/TracksList';
import _ from 'lodash';
import PageTitle from '../components/PageTitle';


class TopTracks extends React.Component {
  constructor() {
    super();
    this.state = {
      userTopTracksWithAlbums: []
    };
  }
  componentDidMount() {
    this._getTracksAndAlbumsByPeriod('overall')
  }

  _getTracksAndAlbumsByPeriod(e) {
    const period = typeof e === 'string' ?
      e :
      e.target.dataset.period;

    getUserTopTracks(this.props.match.params.username, period).then(trackList => {
      this.setState({
        userTopTracksWithAlbums: trackList.toptracks.track
      });
      _.forEach(this.state.userTopTracksWithAlbums, (track, index) => {
        getTrackInfo(track.mbid).then(trackInfo => {
          const trackWithAlbumInfo = trackInfo.track && trackInfo.track.album ?
            {...track, album: trackInfo.track.album.title } :
            {...track, album: false};

          this.setState({
            userTopTracksWithAlbums: _.map(this.state.userTopTracksWithAlbums, (existedTrack, indexToChange) => {
              return index === indexToChange ?
                trackWithAlbumInfo :
                existedTrack
            })
          });
        })
      });
    });
  }

  render() {

    return (
      <Page className="TopTracksPage">

        <PageTitle className="page-title--user-top-tracks">{this.props.match.params.username}'s top tracks:</PageTitle>

        <TracksList tracks={this.state.userTopTracksWithAlbums}>
          <button data-period='overall' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}>(<span>overall</span> |</button>
          <button data-period='7day' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}><span>7days</span> |</button>
          <button data-period='1month' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}><span>1 month</span> |</button>
          <button data-period='3month' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}><span>3 month</span> |</button>
          <button data-period='6month' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}><span>6 month</span> |</button>
          <button data-period='12month' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}><span>12 month</span>)</button>
        </TracksList>
      </Page>
    )
  }
}


export default TopTracks;
