import React, { Component } from 'react';
import io from 'socket.io-client';
import MessageBox from './containers/MessageBox'
import MessageForm from './components/MessageForm'
import { Grid, Row } from 'react-bootstrap'
import './App.css';

const socket = io.connect('localhost:3000', { reconnect: true });


class App extends Component {

  componentDidMount() {
    console.log('Mounted');
    // verify connection
    socket.on('connect', function () { console.log("socket connected"); });
  }

  render() {
    return (
      <div className="container">
        <Grid>
          <Row>
            <MessageBox socket={socket} />
            <MessageForm />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
