import React, { Component } from 'react';
import io from 'socket.io-client';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Grid, Row } from 'react-bootstrap'
import MessageBox from './components/MessageBox'
import MessageForm from './components/MessageForm'
import './App.css';
import Header from './components/AppBar'

const socket = io.connect('localhost:3000', { reconnect: true });
injectTapEventPlugin();


class App extends Component {

  componentDidMount() {
    console.log('Mounted');
    // verify connection
    socket.on('connect', function () { console.log("Socket connected successfully"); });

    socket.on('message all', (from, jsonMessage) => {
      let message = JSON.parse(jsonMessage);
      this.props.postMessage(message);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <MessageBox {...this.props} />
            <MessageForm socket={socket} {...this.props} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
