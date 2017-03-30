
const getUserTopTracks = (userName = 'flykiller', apiKey = 'df54e5ba8935c222214a98fd3b818a43') => {
  return fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${userName}&api_key=${apiKey}&format=json`).then(
    response => {
      return response.json();
    });
};


const getTrackInfo = (artistName, trackName, apiKey = 'df54e5ba8935c222214a98fd3b818a43') => {
  return fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${artistName}&track=${trackName}&format=json`).then(
    response => {
      return response.json();
    });
};


export {getUserTopTracks, getTrackInfo}


