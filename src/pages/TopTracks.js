import React from 'react';

import {getUserTopTracks, getTrackInfo} from '../services/getData';
import Page from '../components/Page';
import TracksList from '../components/TracksList';
import _ from 'lodash';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      userTopTracksWithAlbums: []
    };
  }
  componentDidMount() {
    let e = {
      target: {
        value: 'overall'
      }
    };

    this._getTracksAndAlbumsByPeriod(e)

  }

  _getTracksAndAlbumsByPeriod(e){

    getUserTopTracks(this.props.match.params.username, e.target.value).then(trackList => {
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
        <div className="page__main-container__title">
          <span className="page__main-container__title__text">{this.props.match.params.username}'s top tracks:</span>
        </div>
        <TracksList tracks={this.state.userTopTracksWithAlbums}>
          <button value='overall' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}>overall</button>
          <button value='7day' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}>7days</button>
          <button value='1month' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}>1 month</button>
          <button value='3month' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}>3 month</button>
          <button value='6month' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}>6 month</button>
          <button value='12month' onClick={this._getTracksAndAlbumsByPeriod.bind(this)}>12 month</button>

        </TracksList>
      </Page>
    )
  }
}


export default HomePage;


