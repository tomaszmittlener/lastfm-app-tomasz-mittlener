import React from 'react';
import forEach from 'lodash/forEach';
import map from 'lodash/map';

import {getUserTopTracks, getTrackInfo} from '../services/getData';
import Page from '../components/Page';
import TracksList from '../components/TracksList';


import PageTitle from '../components/PageTitle';


class TopTracks extends React.Component {
  constructor() {
    super();
    this.FILTERS = {
      OVERALL: {
        NAME: 'overall',
        LABEL: 'overall'
      },
      SEVEN_DAYS: {
        NAME: '7day',
        LABEL: '7 days'
      },
      ONE_MONTH: {
        NAME: '1month',
        LABEL: '1 month'
      },
      THREE_MONTHS: {
        NAME: '3month',
        LABEL: '3 months'
      },
      SIX_MONTHS: {
        NAME: '6month',
        LABEL: '6 months'
      },
      TWELVE_MONTHS: {
        NAME: '12month',
        LABEL: 'year'
      }
    };

    this.state = {
      userTopTracksWithAlbums: [],
      getTracksAndAlbumsByPeriod: this._getTracksAndAlbumsByPeriod.bind(this),
    };
  }
  componentDidMount() {
    this._getTracksAndAlbumsByPeriod(this.FILTERS.OVERALL.NAME);
  }

  _getTracksAndAlbumsByPeriod(e) {
    const period = typeof e === 'string' ?
      e :
      e.target.dataset.period;

    getUserTopTracks(this.props.match.params.username, period).then(trackList => {
      this.setState({
        userTopTracksWithAlbums: trackList.toptracks.track
      });
      forEach(this.state.userTopTracksWithAlbums, (track, index) => {
        getTrackInfo(track.mbid).then(trackInfo => {
          const trackWithAlbumInfo =
            trackInfo && trackInfo.track && trackInfo.track.album ?
              {...track, album: trackInfo.track.album.title } :
              {...track, album: false};

          this.setState({
            userTopTracksWithAlbums: map(this.state.userTopTracksWithAlbums, (existedTrack, indexToChange) => {
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
      <Page className="TopTracksPage" username={this.props.match.params.username}>

        <PageTitle className="page-title--user-top-tracks">{this.props.match.params.username}'s top tracks:</PageTitle>

        <TracksList tracks={this.state.userTopTracksWithAlbums} username={this.props.match.params.username}>
          <div className="list__period-filters">
            {map(this.FILTERS, (filter, index) =>
              <button key={index}
                      className="list__filter"
                      data-period={filter.NAME}
                      onClick={this.state.getTracksAndAlbumsByPeriod}>
                {filter.LABEL}
              </button>
            )}
          </div>
        </TracksList>
      </Page>
    )
  }
}


export default TopTracks;
