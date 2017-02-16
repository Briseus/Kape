import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Grid, Col } from 'react-bootstrap'
export default class MessageForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    getValidationState = () => {
        const length = this.state.value.lenght
        if (length <= 0) return 'error'
        else if (length > 0) return 'success'
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const message = {
            self: true,
            time: new Date().valueOf(),
            text: this.state.value,
            id: new Date().valueOf()
        }
        this.sendMessage(message)
    }

    resetTextField = () => {
        this.setState({
            value: ""
        })
    }

    sendMessage = (message) => {
        this.resetTextField()
        let jsonMessage = JSON.stringify(message)
        this.props.postMessage(message);
        this.props.socket.emit('message all', 'Anon#' + message.id, jsonMessage);
    }

    render() {
        return (
            <div className="footerPost">
                <form onSubmit={this.onSubmit}>
                    <Row >
                        <Grid>
                            <Col xs={10} >
                                <TextField
                                    fullWidth={true}
                                    floatingLabelText="Type here to post"
                                    value={this.state.value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={2}>
                                <RaisedButton className="postButton" type="submit" label="Post" />
                            </Col>
                        </Grid>
                    </Row>
                </form>
            </div>
        )
    }

}