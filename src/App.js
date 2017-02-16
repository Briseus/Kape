import React, { Component } from 'react';
import io from 'socket.io-client';
import MessageBox from './components/MessageBox'
import MessageForm from './components/MessageForm'
import { Grid, Row } from 'react-bootstrap'
import './App.css';

const socket = io.connect('localhost:3000', { reconnect: true });


class App extends Component {

  componentDidMount() {
    console.log('Mounted');
    // verify connection
    socket.on('connect', function () { console.log("socket connected"); });

    socket.on('message all', (from, jsonMessage) => {
      let message = JSON.parse(jsonMessage);
      console.log(message.id + "" + message.time + "" + message.text);
      console.log("tring to add -> " + message);
      this.props.postMessage(message);
    });
  }

  render() {
    return (
      <div className="container">
        <Grid>
          <Row>
            <MessageBox {...this.props}/>
            <MessageForm socket={socket} {...this.props} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
