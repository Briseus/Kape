import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { store } from './store/index'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

const ChatApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <App />
  </MuiThemeProvider>
)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ChatApp />
    </Provider>, div);
});
