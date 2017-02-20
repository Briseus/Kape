import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class ChannelForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        let found = false
        // check if already exitsts
        this.props.channels.forEach((channel) => {
            if (channel.name === this.state.value) {
                found = true
            }
        })
        if (!found) {
            console.log("Creating room " + this.state.value)
            this.props.socket.emit('createChannel', this.state.value)
        } else  {
            console.log("Or not")
        }
        found = false

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    fullWidth={true}
                    floatingLabelText="Create a channel"
                    value={this.state.value}
                    onChange={this.handleChange} />
                <RaisedButton type="submit" label="Create" />
            </form>
        )
    }

}
