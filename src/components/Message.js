import React, { Component } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Linkify from 'linkifyjs/react'

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
            this.props.message.userName + "#" + this.props.message.userId
        )
        return (
            <li className="message" style={Object.assign({}, this.props.self && selfPost, !this.props.self && defaultStyle)}>
                <Card >
                    <CardHeader
                        title={user}
                        subtitle={time}
                    />
                    <CardText>
                        <Linkify >
                        {this.props.message.text}
                        </Linkify>
                    </CardText>
                </Card>
            </li>
        )
    }
}