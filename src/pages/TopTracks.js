import React from 'react';

import {getUserTopTracks} from '../services/getData';
import Page from '../components/Page';
import List from '../components/List';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      userTopTracks: {}
    };
  }

  componentDidMount() {
    getUserTopTracks(this.props.match.params.username).then(trackList => {
      this.setState({
        userTopTracks: trackList.toptracks
      });
    });
  }

  render() {

    return(
      <Page className="TopTracksPage">
        <List TopTracks={this.state.userTopTracks}/>
      </Page>
    )
  }
}

export default HomePage;
