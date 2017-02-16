import React, { Component } from 'react';
import io from 'socket.io-client';
import MessageBox from './containers/MessageBox'
import MessageForm from './components/MessageForm'
import { Grid, Row } from 'react-bootstrap'
import './App.css';

const socket = io.connect('localhost:3000', { reconnect: true });


export default class Chat extends Component {

  componentDidMount() {
    console.log('Mounted');
    // verify connection
    socket.on('connect', function () { console.log("socket connected"); });
    
    //when getting message
    socket.on('message all', (from, message) => {
      var tempMessage = "Got " + from + " said " + message;
      console.log("tring to add -> " + tempMessage);
      this.props.postMessage(tempMessage);
    });
  }



  render() {
    return (
      <div className="container">
        <Grid>
          <Row>
            <MessageBox />
            <MessageForm socket={socket} />
          </Row>
        </Grid>
      </div>
    );
  }
}