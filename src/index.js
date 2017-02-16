import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import {store} from './store/index'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
