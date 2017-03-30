
const getUserTopTracks = (userName = 'flykiller', apiKey = 'df54e5ba8935c222214a98fd3b818a43') => {
  return fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${userName}&api_key=${apiKey}&format=json`).then(
    response => {
      return response.json();
    });
};


const getTrackInfo = (trackId, apiKey = 'df54e5ba8935c222214a98fd3b818a43') => {
  return fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&mbid=${trackId}&format=json`).then(
    response => {
      return response.json();
    });
};

const getArtistInfo = (artistId, apiKey = 'df54e5ba8935c222214a98fd3b818a43') => {
  return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&api_key=${apiKey}&mbid=${artistId}&format=json`).then(
    response => {
      return response.json();
    });
};


export {getUserTopTracks, getTrackInfo, getArtistInfo}


