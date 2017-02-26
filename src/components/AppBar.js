import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import myTheme from './../Theme'
import GithubLogo from './../github-mark.svg'
import './../App.css'

export default class AppBarHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
          <AppBar
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<div ><a href="https://github.com/Briseus/Kape"><img src={GithubLogo} alt="github-logo"/></a></div>}
            title="Kape"
          />
        </MuiThemeProvider>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}>
          <MenuItem
            containerElement={<Link to={"/"} />}
            onTouchTap={this.handleClose}
            primaryText={"Home"} />
          <MenuItem
            containerElement={<Link to={"/chat"} />}
            onTouchTap={this.handleClose}
            primaryText={"Channels"} />
        </Drawer>
      </div>
    )
  }
}