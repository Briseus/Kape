import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import shortid from 'shortid'
import './../App.css'

export default class MessageForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            errorText: ""
        }
    }

    getValidationState = () => {
        if (this.state.value <= 0) {
            this.setState({
                errorText: "Forgot to type the message?"
            })
            return false
        } else {
            this.setState({
                errorText: ""
            })
            return true
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.getValidationState() === true) {
            const message = {
                time: new Date().valueOf(),
                text: this.state.value,
                id: shortid.generate(),
                userId: this.props.user.id,
                userName: this.props.user.name
            }
            this.sendMessage(message)
        }

    }

    resetTextField = () => {
        this.setState({
            value: ""
        })
    }

    sendMessage = (message) => {
        this.resetTextField()
        let jsonMessage = JSON.stringify(message)
        this.props.socket.emit("message", this.props.user.name + '#' + this.props.user.id, jsonMessage, this.props.params.room)
    }

    render() {
        return (
                <form onSubmit={this.onSubmit} autoComplete="off"  className="channelForm">
                                <TextField
                                    fullWidth={true}
                                    floatingLabelText="Type here to post"
                                    errorText={this.state.errorText}
                                    value={this.state.value}
                                    onChange={this.handleChange} />
                                    <div style={{paddingLeft: 10}}>
                                <RaisedButton
                                    className="postButton"
                                    type="submit"
                                    label="Post"
                                    secondary={true} />
                                    </div>
                            
                </form>


        )
    }

}