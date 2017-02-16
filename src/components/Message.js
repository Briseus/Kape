import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { Card, CardHeader, CardText } from 'material-ui/Card'

export default class Message extends Component {

    render() {
        const defaultStyle = {
            padding: '10px',
            width: '80%',
            float: 'left'
        }
        const selfPost = {
            padding: '10px',
            width: '80%',
            float: 'right'
        }
        const time = (
            new Date(this.props.message.time).toLocaleTimeString()
        )
        const user = (
            "Anon#" + this.props.message.id
        )
        return (
            <li style={Object.assign({}, this.props.message.self && selfPost, !this.props.message.self && defaultStyle)}>
                <Card >
                    <CardHeader
                        title={user}
                        subtitle={time}
                    />
                    <CardText>
                        {this.props.message.text}
                    </CardText>
                </Card>
            </li>
        )
    }
}