import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default class AppBarHeader extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <AppBar
        title="Kape"
      />
      </MuiThemeProvider>
    )
  }
}