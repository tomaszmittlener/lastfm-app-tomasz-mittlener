import React from 'react';

import {getUserTopTracks, getTrackInfo} from '../services/getData';
import Page from '../components/Page';
import List from '../components/List';
import _ from 'lodash';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      userTopTracksWithAlbums: []
    };
  }
  componentDidMount() {
    getUserTopTracks(this.props.match.params.username).then(trackList => {
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
        <List topTracks={this.state.userTopTracksWithAlbums}/>
      </Page>
    )
  }
}


export default HomePage;


