import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class Message extends Component {

    render() {
        const time = (
           new Date(this.props.message.time).toString()
        )
        const title = (
             "Anon#" + this.props.message.id
        )
        return (
            <li>
                <Panel style={{textAlign:'left'}} header={title+time}>
                    <p> {this.props.message.text} </p>
                </Panel>
            </li>
        )
    }
}