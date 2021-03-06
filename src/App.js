import React, { Component } from 'react'
import io from 'socket.io-client'
import './App.css'
import Header from './components/AppBar'

const socket = io.connect()

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }

  componentDidMount() {
    // verify connection
    socket.on('connect', () => {
      console.log("Socket connected successfully")
      socket.emit('channels', )

      socket.on('channels', (channels) => {
        this.updateChannels(channels)
      })
    })
  }

  updateChannels = (channels) => {
    this.setState({
      channels: channels
    })
  }

  render() {
    return (
      <div className="rootContainer">
        <Header />
        {React.Children.map(this.props.children, (child) => React.cloneElement(child, { socket: socket, channels: this.state.channels }))}
      </div>
    );
  }
}
