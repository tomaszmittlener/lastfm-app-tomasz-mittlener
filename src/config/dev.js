'use strict';

import baseConfig from './base';

let config = {
  apiKey: 'df54e5ba8935c222214a98fd3b818a43',  // feel free to remove the appEnv property here
  apiHost: 'http://ws.audioscrobbler.com/2.0/'  // feel free to remove the appEnv property here
};

export default Object.freeze(Object.assign({}, baseConfig, config));
