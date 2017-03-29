import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router } from 'react-router-dom';

// Render the main component into the dom
ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('wrapper'));
