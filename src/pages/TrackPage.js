import React from 'react';

import Page from '../components/Page';

class TrackPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return(
      <Page>
        Track Page: {this.props.match.params.trackName}
      </Page>
    )
  }
}

export default TrackPage;
