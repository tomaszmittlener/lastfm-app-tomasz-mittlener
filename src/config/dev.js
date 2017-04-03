'use strict';

import baseConfig from './base';

let config = {
  apiKey: 'df54e5ba8935c222214a98fd3b818a43',
  apiHost: 'http://ws.audioscrobbler.com/2.0/'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
