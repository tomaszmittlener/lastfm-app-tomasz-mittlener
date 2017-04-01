import React from 'react';

import Page from '../components/Page';
import ProfilePage from '../components/ProfilePage';
import List from '../components/List';
import TrackList from '../components/TracksList';
import { getTrackInfo, getSimilarTracks } from '../services/getData';

class TrackPage extends React.Component {
  constructor() {
    super();
    this.state = {
      similarTracks: [],
      trackInfo: {},
      trackArtistInfo: {},
      trackImage: {},
      trackAlbum: [],
      trackWiki: {}
    }
  }

  componentDidMount() {

    getSimilarTracks(this.props.match.params.trackId).then(similarTracks => {
      this.setState({
        similarTracks: similarTracks.similartracks.track
      })
    });

    getTrackInfo(this.props.match.params.trackId).then(trackInfo => {
      this.setState({
        trackInfo: trackInfo.track,
        trackArtistInfo: trackInfo.track.artist,
        trackImage: trackInfo.track.album.image[3]['#text'],
        trackAlbum: trackInfo.track.album,
        trackWiki: trackInfo.track.wiki,
        trackLength: trackInfo.track.duration

      })
    })
    debugger;
  }

  render() {
    let {trackInfo, trackImage, trackArtistInfo, trackAlbum, trackWiki, similarTracks, trackLength} = this.state;

    return(
      <Page>

        <div className="page__main-container__title">
          <span className="page__main-container__title__text">Track details:</span>
        </div>

        <ProfilePage className ={`trackPage-${this.props.match.params.trackId}`}>
          <div className="profile-page__main-container__header">

            <div className="profile-page__main-container__header__art-container">
              <img src = {trackImage}/>
            </div>

            <div className="profile-page__main-container__header__details-container">
              <dl>
                <dt>Track title: </dt>
                <dd className="profile-page__main-container__header__details-container__track-name">{trackInfo.name}</dd>
                <dt>Track length: </dt>
                <dd className="profile-page__main-container__header__details-container__track-length">{trackLength}</dd>
                <dt>Artist: </dt>
                <dd className="profile-page__main-container__header__details-container__artist-name">{trackArtistInfo.name}</dd>
                <dt>Album: </dt>
                <dd className="profile-page__main-container__header__details-container__album-name">{trackAlbum.title}</dd>
              </dl>
            </div>

          </div>

          {trackWiki ? <div className="profile-page__main-container__wiki">
            <dl>
              <dt>Wiki:</dt>
              <dd>{trackWiki.summary}</dd>
            </dl>
          </div> : null  }

          <div className="profile-page__main-container__list">

            <div className="profile-page__main-container__list__title">
              <span className="profile-page__main-container__list__title__text">Similar Tracks</span>
            </div>

            <List>
              <TrackList tracks={similarTracks}/>
            </List>

          </div>

        </ProfilePage>

      </Page>
    )
  }
}

export default TrackPage;

