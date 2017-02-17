import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { store } from './store/index'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const ChatApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(
  <Provider store={store}>
  <ChatApp />
  </Provider>,
  document.getElementById('root')
);
