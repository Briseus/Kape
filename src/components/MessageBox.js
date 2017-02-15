import React, { Component } from 'react';
import Message from './Message'

export default class MessageBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            messages: nextProps.messages
        })
    }

    componentWillMount() {
        console.log(this.props)
            this.setState({
                messages : this.props.messages
            })
    }

    componentDidMount() {
        //send test message
        this.props.socket.emit('message all', 'Makamaka', 'Joined messagebox');
        
        //when getting message
        this.props.socket.on('message all', (from, message) => {
            var tempMessage = "Got " + from + " said " + message;
            console.log("tring to add -> " + tempMessage);
            this.props.postMessage(tempMessage);
        });
    }

    render() {
        var messageNodes = this.state.messages.map((message) => {
            return (<Message
                key={message.id}
                message={message} />)
        })
        return (
            <div className="messages">
                {messageNodes}
            </div>
        )
    }

}