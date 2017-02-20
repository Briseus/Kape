import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Col } from 'react-bootstrap'

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
        } else {
            console.log("Or not")
        }
        found = false

    }

    render() {
        return (
            <Grid>
                <Row>
                    <form onSubmit={this.onSubmit}>
                        <Col xs={12} md={9}>
                            <TextField
                                fullWidth={true}
                                floatingLabelText="Create a channel"
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </Col>
                        <Col xs={12} md={3} style={{padding: 25, textAlign: 'center'}}>
                            <RaisedButton type="submit" label="Create" secondary={true} />
                        </Col>
                    </form>
                </Row>
            </Grid>

        )
    }

}
