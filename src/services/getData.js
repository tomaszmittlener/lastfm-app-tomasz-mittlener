
//to specify the time period over which to retrieve top tracks add as period property:  overall | 7day | 1month | 3month | 6month | 12month
const getUserTopTracks = (userName = 'flykiller', period = 'overall', apiKey = 'df54e5ba8935c222214a98fd3b818a43') => {
  return fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${userName}&api_key=${apiKey}&period=${period}&format=json`).then(
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

const getSimilarTracks = (trackId, apiKey = 'df54e5ba8935c222214a98fd3b818a43') => {
  return fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&api_key=${apiKey}&mbid=${trackId}&format=json`).then(
    response => {
      return response.json();
    });
};

const getArtistTopTracks = (artistId, apiKey = 'df54e5ba8935c222214a98fd3b818a43') => {
  return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&api_key=${apiKey}&mbid=${artistId}&format=json`).then(
    response => {
      return response.json();
    });
};


export {getUserTopTracks, getTrackInfo, getArtistInfo, getSimilarTracks, getArtistTopTracks}


