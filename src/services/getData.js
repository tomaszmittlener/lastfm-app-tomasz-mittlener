import config from 'config';
import _ from 'lodash';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(`Service unavaible ${response.status}`)
}

function json(response) {
  return response.json();
}

const checkForErrors = (json) => {
  if(!_.isUndefined(json.error)) {
    throw new Error(`${json.error} + ${json.message}`)
  } else {
    return json;
  }
};

const ifError = (error) => {
  console.warn('request failed', error) // eslint-disable-line
};

/**
 * Service for user top tracks
 * @param {string} userName - User name.
 * @param {string} period - Specify the time period over which to retrieve top tracks add as period property:  overall | 7day | 1month | 3month | 6month | 12month.
 * @param {string} apiKey - apiKey
 * @return {promise} - Promise with top track list in json
 */
function getUserTopTracks(userName = 'flykiller', period = 'overall', apiKey = config.apiKey) {
  return fetch(`${config.apiHost}?method=user.gettoptracks&user=${userName}&api_key=${apiKey}&period=${period}&format=json`)
    .then(status)
    .then(json)
    .then(checkForErrors)
    .catch(ifError);
}

const getTrackInfo = (trackId, apiKey = config.apiKey) => {
  return fetch(`${config.apiHost}?method=track.getInfo&api_key=${apiKey}&mbid=${trackId}&format=json`)
    .then(status)
    .then(json)
    .then(checkForErrors)
    .catch(ifError);
};

const getArtistInfo = (artistId, apiKey = config.apiKey) => {
  return fetch(`${config.apiHost}?method=artist.getInfo&api_key=${apiKey}&mbid=${artistId}&format=json`)
    .then(status)
    .then(json)
    .then(checkForErrors)
    .catch(ifError);
};

const getSimilarTracks = (trackId, apiKey = config.apiKey) => {
  return fetch(`${config.apiHost}?method=track.getsimilar&api_key=${apiKey}&mbid=${trackId}&format=json`)
    .then(status)
    .then(json)
    .then(checkForErrors)
    .catch(ifError);
};

const getArtistTopTracks = (artistId, apiKey = config.apiKey) => {
  return fetch(`${config.apiHost}?method=artist.gettoptracks&api_key=${apiKey}&mbid=${artistId}&format=json`)
    .then(status)
    .then(json)
    .then(checkForErrors)
    .catch(ifError);
};


export {getUserTopTracks, getTrackInfo, getArtistInfo, getSimilarTracks, getArtistTopTracks}


