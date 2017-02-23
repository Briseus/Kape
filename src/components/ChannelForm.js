import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Col } from 'react-bootstrap'

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
            <Grid>
                <Row>
                    <form onSubmit={this.onSubmit} autoComplete="off">
                        <Col xs={12} md={9}>
                            <TextField
                                fullWidth={true}
                                floatingLabelText="Create a channel"
                                errorText={this.state.errorText}
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </Col>
                        <Col xs={12} md={3} style={{ padding: 25, textAlign: 'center' }}>
                            <RaisedButton type="submit" label="Create" secondary={true} />
                        </Col>
                    </form>
                </Row>
            </Grid>
        )
    }

}
