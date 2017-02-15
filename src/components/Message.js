import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        return (
            <div className="message">
                <p> {this.props.message.time} </p>
                <p> {this.props.message.text} </p>
                <p> {this.props.message.id} </p>
            </div>
        )
    }
}