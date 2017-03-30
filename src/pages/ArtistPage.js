import React from 'react';

import Page from '../components/Page';

class ArtistPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return(
      <Page>
        Artist Page {this.props.match.params.artistName}
      </Page>
    )
  }
}

export default ArtistPage;
