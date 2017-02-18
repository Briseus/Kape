import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'

export default class AppBarHeader extends Component {

  constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
      <MuiThemeProvider>
      <AppBar
        onLeftIconButtonTouchTap={this.handleToggle}
        title="Kape"
      />
       </MuiThemeProvider>
      <Drawer 
      docked={false}
      open={this.state.open}
      onRequestChange={(open) => this.setState({ open })}/>
      
    </div>
    )
  }
}