import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class ChannelForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            errorText: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        // check if already exitsts
        if (this.validChannel() === true) {
            console.log("Creating room " + this.state.value)
            this.props.socket.emit('createChannel', this.state.value)
            this.setState({
                value: ""
            })
        } else {
            console.log("Or not")
        }
    }

    validChannel = () => {

        if (this.state.value.length < 3) {
            this.setState({
                errorText: "Channel name has to be atleast 3 characters long"
            })
            return false
        } else if (this.props.channels.includes(this.state.value)) {
            this.setState({
                errorText: "Channel already exists"
            })
            return false
        } else {
            this.setState({
                errorText: ""
            })
            return true
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <div className="channelForm">
                    <TextField
                        fullWidth={true}
                        floatingLabelText="Create a channel"
                        errorText={this.state.errorText}
                        value={this.state.value}
                        onChange={this.handleChange} />
                        <div className="button">
                    <RaisedButton type="submit" label="Create" secondary={true} />
                    </div>
                    </div>
                </form>
            </div>
        )
    }

}
