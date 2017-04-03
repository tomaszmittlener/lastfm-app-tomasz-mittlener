import React from 'react';
import _ from 'lodash';

import Page from '../components/Page';
import Details from '../components/Details';
import List from '../components/List';
import ArtistsList from '../components/ArtistsList';
import TracksList from '../components/TracksList';
import PageTitle from '../components/PageTitle';

import { getArtistInfo, getArtistTopTracks } from '../services/getData';


class ArtistPage extends React.Component {
  constructor() {
    super();
    this.state = {
      artistInfo: {},
      artistImage: '',
      similarArtists: {},
      artistTopTracks: [],
      artistWiki: ''
    };
  }

  componentDidMount() {

    getArtistTopTracks(this.props.match.params.artistId).then(artistTopTracks => {
      this.setState({
        artistTopTracks: artistTopTracks.toptracks.track
      })
    });

    getArtistInfo(this.props.match.params.artistId).then(artistInfo => {

      /**
       * temporary html remover
       * needs more work
       */
      let artistWiki = artistInfo.artist.bio.summary;
      let wikiHtmlRemoved = _.replace(artistWiki, /<\/?[^>]+(>|$)/g, '');
      /**
       */

      this.setState({
        artistInfo: artistInfo.artist,
        artistImage: artistInfo.artist.image[3]['#text'],
        similarArtists: artistInfo.artist.similar,
        artistWiki: wikiHtmlRemoved
      });
    })
  }

  render() {
    let {artistInfo, artistImage, similarArtists, artistWiki, artistTopTracks} = this.state;

    return (
      <Page>
        <PageTitle className="page-title--artist-details">Artist details:</PageTitle>

        <Details className ={`details--artist-${this.props.match.params.artistId}`}>

          <img className="details__image" src = {artistImage}/>

          <dl className="details__list">
            <dt className="title"><h3>Artist: </h3></dt>
            <dd className="description">{artistInfo.name}</dd>
            {artistWiki ?
              <div>
                <dt className="title"><h3>Wiki:</h3></dt>
                <dd className="description">{artistWiki}</dd>
              </div> :
              null}
          </dl>

        </Details>

        {/*LISTS*/}

        <PageTitle className="page-title--similar-artists">Similar Artists</PageTitle>

        <List>
          <ArtistsList artists={similarArtists} artistId={this.props.match.params.artistId}/>
        </List>

        <PageTitle className="page-title--top-tracks">Top Tracks</PageTitle>

        <List>
          <TracksList tracks={artistTopTracks}/>
        </List>


      </Page>
    )
  }
}

export default ArtistPage;
