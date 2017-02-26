import React, { Component } from 'react'
import io from 'socket.io-client'
import MessageBox from './components/MessageBox'
import MessageForm from './components/MessageForm'
import Paper from 'material-ui/Paper'
import shortid from 'shortid'

var socket

export default class Chat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        socket = io.connect()
        socket.on("connect", () => {
            console.log("Chat socket connected successfully")

            const user = this.props.user.name + '#' + this.props.user.id
            socket.emit("joinChannel", user, this.props.params.room)

            socket.on("message", (from, jsonMessage, room) => {
                const message = JSON.parse(jsonMessage)
                this.addMessage(message)
            })

            socket.on("announcement", (message) => {
                const announcement = {
                    time: new Date().valueOf(),
                    text: message,
                    id: shortid.generate(),
                    userId: "announcement",
                    userName: ""
                }
                this.addMessage(announcement)
            })

        })
    }

    componentWillUnmount() {
        socket.disconnect()
    }

    addMessage = (message) => {
        console.log("Adding message")
        if (socket.connected) {
            this.setState({
                messages: this.state.messages.concat(message)
            })
        }
    }

    render() {
        return (
            <div className="container chat">
                <Paper>
                    <MessageBox messages={this.state.messages} {...this.props} />
                    <MessageForm socket={socket} {...this.props} />
                </Paper>
            </div>
        )
    }
}



