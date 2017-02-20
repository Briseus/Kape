import React, { Component } from 'react'
import io from 'socket.io-client'
import MessageBox from './components/MessageBox'
import MessageForm from './components/MessageForm'


const socket = io.connect("/")

export default class Chat extends Component {

    componentDidMount() {
        // verify connection
        socket.on('connect', function () {
            console.log("Socket connected successfully")
        });

        let msgType
        if (this.props.params.room !== undefined) {
            socket.emit('room', this.props.params.room)
            msgType = "message"
        } else {
            msgType = "message all"
        }

        socket.on(msgType, (from, jsonMessage) => {
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



