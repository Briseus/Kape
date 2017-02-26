import React, { Component } from 'react'
import { Card, CardText } from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import Linkify from 'linkifyjs/react'

export default class Message extends Component {

    renderMessageHeader = () => {
        const time = (
            new Date(this.props.message.time).toLocaleTimeString()
        )
        const user = (
            this.props.message.userName + "#" + this.props.message.userId
        )

        if (this.props.self) {
            return (
                <div className="messageHeader">
                    <Chip labelStyle={{fontSize: 12}}>
                        {user}
                    </Chip>
                    <span className="messageTime">{time} </span>
                </div>
            )
        } else {
            return (
                <div className="messageHeader">
                    <span>{user} {time} </span>
                </div>
            )
        }

    }

    render() {
        return (
            <li className="message">
                <Card >
                    {this.renderMessageHeader()}
                    <CardText style={{ paddingLeft: 16, paddingTop: 0, paddingBottom: 8 }}>
                        <Linkify >
                            {this.props.message.text}
                        </Linkify>
                    </CardText>
                </Card>
            </li>
        )
    }
}