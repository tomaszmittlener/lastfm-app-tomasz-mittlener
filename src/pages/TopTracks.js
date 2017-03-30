import React from 'react';

import {getUserTopTracks, getTrackInfo } from '../services/getData';
import Page from '../components/Page';
import List from '../components/List';
//import _ from 'lodash';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      userTopTracks: [],
      userTopTracksWithAlbums: []
    };
  }
  componentDidMount() {
    getUserTopTracks(this.props.match.params.username).then(trackList => {
      this.setState({
        userTopTracks: trackList.toptracks.track//,
        // userTopTracksWithAlbums: trackList.toptracks.track
      });

      // _.map(this.state.userTopTracksWithAlbums, (track) => {
      //   getTrackInfo(track.artist.name, track.name).then(trackInfo => {
      //     trackInfo.track.album?
      //
      //       this.setState({
      //         userTopTracksWithAlbums: [...trackList.toptracks.track, {album: trackInfo.track.album.title}]
      //       }):
      //
      //       this.setState({
      //         userTopTracksWithAlbums: [...trackList.toptracks.track, {album: false}]
      //       })
      //   })
      // })
    });
  }

  render() {

    return (
      <Page className="TopTracksPage">
        <List TopTracks={this.state.userTopTracks}/>
      </Page>
    )
  }
}


export default HomePage;


