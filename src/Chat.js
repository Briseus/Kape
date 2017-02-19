import React, { Component } from 'react'
import io from 'socket.io-client'
import MessageBox from './components/MessageBox'
import MessageForm from './components/MessageForm'

const socket = io.connect('localhost:3000', { reconnect: true });
//const socket = io.connect("/")

export default class Chat extends Component {
    
    componentDidMount() {
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
                <MessageBox {...this.props} />
                <MessageForm socket={socket} {...this.props} />
            </div>
        )
    }
}



