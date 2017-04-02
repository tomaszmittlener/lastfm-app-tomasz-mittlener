import React from 'react';
import _ from 'lodash';

import Page from '../components/Page';
import Details from '../components/Details';
import List from '../components/List';
import TrackList from '../components/TracksList';
import PageTitle from '../components/PageTitle';
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
      trackWiki: ''
    }
  }

  componentDidMount() {
    getSimilarTracks(this.props.match.params.trackId).then(similarTracks => {
      this.setState({
        similarTracks: similarTracks.similartracks.track
      })
    });

    getTrackInfo(this.props.match.params.trackId).then(trackInfo => {

      /**
       * temporary html remover
       * needs more work
       */
      let trackWiki = trackInfo.track.wiki.summary;
      let wikiHtmlRemoved = _.replace(trackWiki, /<\/?[^>]+(>|$)/g, '');
      /**
       */

      /**
       * temporary milliseconds to minutes and seconds converter
       * needs more work
       */
      let minutes = Math.floor(trackInfo.track.duration / 60000);
      let seconds = ((trackInfo.track.duration % 60000) / 1000).toFixed(0);
      let convertedTime = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      /**
       */

      this.setState({
        trackInfo: trackInfo.track,
        trackArtistInfo: trackInfo.track.artist,
        trackImage: trackInfo.track.album.image[3]['#text'],
        trackAlbum: trackInfo.track.album,
        trackWiki: wikiHtmlRemoved,
        trackLength: convertedTime
      })
    })
  }

  render() {
    let {trackInfo, trackImage, trackArtistInfo, trackAlbum, trackWiki, similarTracks, trackLength} = this.state;

    return(
      <Page>
        <PageTitle className="page-title--track-details">Track details:</PageTitle>

        <Details className ={`details--track-${this.props.match.params.trackId}`}>

          <img className="details__image" src = {trackImage}/>


          <dl className="details__list">
            <dt className="title">Track title: </dt>
            <dd className="description">{trackInfo.name}</dd>
            <dt className="title">Track length: </dt>
            <dd className="description">{trackLength}</dd>
            <dt className="title">Artist: </dt>
            <dd className="description">{trackArtistInfo.name}</dd>
            <dt className="title">Album: </dt>
            <dd className="description">{trackAlbum.title}</dd>
            {trackWiki ?
              <div>
                <dt className="title">Wiki:</dt>
                <dd className="description">{trackWiki}</dd>
              </div> :
              null  }
          </dl>

        </Details>

        {/*LISTS*/}

        <PageTitle className="page-title--similar-tracks">Similar tracks</PageTitle>


        <List>
          <TrackList tracks={similarTracks}/>
        </List>
      </Page>
    )
  }
}

export default TrackPage;
