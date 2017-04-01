import React from 'react';

import Page from '../components/Page';
import ProfilePage from '../components/ProfilePage';
import List from '../components/List';
import ArtistsList from '../components/ArtistsList';
import TracksList from '../components/TracksList';

import { getArtistInfo, getArtistTopTracks } from '../services/getData';


class ArtistPage extends React.Component {
  constructor() {
    super();
    this.state = {
      artistInfo: {},
      artistImage: '',
      similarArtists: [],
      artistTopTracks: []
    };
  }

  componentDidMount() {

    getArtistTopTracks(this.props.match.params.artistId).then(artistTopTracks => {
      this.setState({
        artistTopTracks: artistTopTracks.toptracks.track
      })
    });

    getArtistInfo(this.props.match.params.artistId).then(artistInfo => {
      this.setState({
        artistInfo: artistInfo.artist,
        artistImage: artistInfo.artist.image[3]['#text'],
        similarArtists: artistInfo.artist.similar,
        artistWiki: artistInfo.artist.bio

      })
    })
  }

  render() {
    let {artistInfo, artistImage, similarArtists, artistWiki, artistTopTracks} = this.state;

    return (
      <Page>

        <div className="page__main-container__title">
          <span className="page__main-container__title__text">Artist details:</span>
        </div>

        <ProfilePage className ={`trackPage-${this.props.match.params.artistId}`}>
          <div className="profile-page__main-container__header">

            <div className="profile-page__main-container__header__art-container">
              <img src = {artistImage}/>
            </div>

            <div className="profile-page__main-container__header__details-container">
              <dl>
                <dt>Artist: </dt>
                <dd className="profile-page__main-container__header__details-container__artist-name">{artistInfo.name}</dd>
              </dl>
            </div>

          </div>

          {artistWiki ? <div className="profile-page__main-container__wiki">
            <dl>
              <dt>Wiki:</dt>
              <dd>{artistWiki.summary}</dd>
            </dl>
          </div> : null  }

          <div className="profile-page__main-container__list">

            <div className="profile-page__main-container__list__title">
              <span className="profile-page__main-container__list__title__text">Similar Artists</span>
            </div>

            <List>
              <ArtistsList tracks={similarArtists} artistId={this.props.match.params.artistId}/>
            </List>

            <div className="profile-page__main-container__list__title">
              <span className="profile-page__main-container__list__title__text">Top Tracks</span>
            </div>

            <List>
              <TracksList tracks={artistTopTracks}/>
            </List>

          </div>

        </ProfilePage>

      </Page>
    )
  }
}

export default ArtistPage;
