import React, { Component } from 'react'
import io from 'socket.io-client'
import MessageBox from './components/MessageBox'
import MessageForm from './components/MessageForm'
import { Grid, Row } from 'react-bootstrap'

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
        socket.on('connect', () => {
            console.log("Chat socket connected successfully")
            socket.emit('joinChannel', this.props.params.room)
            socket.on("message", (from, jsonMessage, room) => {
                const message = JSON.parse(jsonMessage)
                if (this.props.params.room === room) {
                    this.addMessage(message)
                }
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
            <Grid>
                <Row>
                    <MessageBox messages={this.state.messages} {...this.props} />
                    <MessageForm socket={socket} {...this.props} />
                </Row>
            </Grid>
        )
    }
}



