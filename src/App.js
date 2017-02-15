import React, { Component } from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import MessageBox from './containers/MessageBox'
import './App.css';

let socket = io.connect('localhost:3000', {reconnect: true});


class App extends Component {

  componentDidMount() {
    console.log('Mounted');
    // verify connection
    socket.on('connect', function () { console.log("socket connected"); });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Reppaa
        </p>
        <MessageBox socket={socket} />
      </div>
    );
  }
}

export default App;
