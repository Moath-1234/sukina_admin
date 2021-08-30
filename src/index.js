import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';
import { icons } from './assets/icons';

import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill';

React.icons = icons;

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
