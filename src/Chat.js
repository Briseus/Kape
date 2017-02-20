import React, { Component } from 'react'
import MessageBox from './components/MessageBox'
import MessageForm from './components/MessageForm'
import { Grid, Row } from 'react-bootstrap'

export default class Chat extends Component {

    componentDidMount() {
        //tell socket to join room
        let msgType
        if (this.props.params.room !== undefined) {
            msgType = "message"
        } else {
            msgType = "message all"
        }

        this.props.socket.on(msgType, (from, jsonMessage) => {
            let message = JSON.parse(jsonMessage)
            this.props.postMessage(message)
        })
        console.log(this.props.params)
        this.props.socket.emit('joinChannel', this.props.params.room)

    }
    render() {
        return (
            <Grid>
                <Row>
                    <MessageBox {...this.props} />
                    <MessageForm  {...this.props} />
                </Row>
            </Grid>
        )
    }
}



