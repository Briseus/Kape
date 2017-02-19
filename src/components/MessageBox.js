import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import Paper from 'material-ui/Paper'

export default class MessageBox extends Component {

    static scrollAtBottom = true;

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

    componentWillUpdate(nextProps) {
        this.newMessages = nextProps.messages.length !== this.state.messages
        if (this.newMessages) {
            const { messages } = this.refs
            const scrollPosition = messages.scrollTop
            const scrollBottom = (messages.scrollHeight - messages.clientHeight)
            this.scrollAtBottom = (scrollBottom === 0) || (scrollPosition === scrollBottom)
        }
    }

    componentWillMount() {
        this.setState({
            messages: this.props.messages
        })
    }

    componentDidUpdate() {
        if (this.newMessages) {
            if (this.scrollAtBottom) {
                this.scrollToBottom()
            }
        }


    }

    scrollToBottom = () => {
        const { messages } = this.refs
        const scrollHeight = messages.scrollHeight
        const height = messages.clientHeight
        const maxScrollTop = scrollHeight - height
        ReactDOM.findDOMNode(messages).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0

    }

    render() {
        console.log(this.props)
        const messageNodes = this.state.messages.map((message) => {
            if (message.userId === this.props.user.id) {
                return (<Message
                self={true}
                key={message.id}
                user={this.props.user}
                message={message} />)
            }
            return (<Message 
                key={message.id}
                user={this.props.user}
                message={message} />)
        })
        return (
                <Paper>
                <ul className="messagesContainer" ref="messages">
                    {messageNodes}
                </ul>
                </Paper>
        )
    }

}

