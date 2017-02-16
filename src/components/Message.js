import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class Message extends Component {
    render() {
        const title = (
            <h3> {this.props.message.id} + {this.props.message.time} </h3>
        )
        return (
            <li>
                <Panel style={{textAlign:'left'}} header={title}>
                    <p> {this.props.message.text} </p>
                </Panel>
            </li>
        )
    }
}