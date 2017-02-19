import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { store } from './store/index'
import { Provider } from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './containers/App';
import { Router, browserHistory } from 'react-router';
import routes from './routes'
import muiTheme from './Theme'

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
