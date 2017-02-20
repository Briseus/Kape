import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Grid, Col } from 'react-bootstrap'
import shortid from 'shortid'
import Paper from 'material-ui/Paper'

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
            time: new Date().valueOf(),
            text: this.state.value,
            id: shortid.generate(),
            userId: this.props.user.id,
            userName: this.props.user.name
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
        this.props.postMessage(message);
        let jsonMessage = JSON.stringify(message)
        let msgType

        //got a /chat/someroomname route
        if (this.props.params.room !== undefined) {
            console.log("got param " + this.props.params.room)
            msgType = "message"
        } else {
            console.log("did NOT get some params")
            msgType = "message all"
        }
        this.props.socket.emit(msgType, this.props.user.name + '#' + this.props.user.id, jsonMessage, this.props.params.room)


    }

    render() {
        return (
            <Paper className="footerPost">
                <form onSubmit={this.onSubmit}>
                    <Row >
                        <Grid>
                            <Col xs={8} md={10} >
                                <TextField
                                    fullWidth={true}
                                    floatingLabelText="Type here to post"
                                    value={this.state.value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={4} md={2}>
                                <RaisedButton className="postButton" type="submit" label="Post" />
                            </Col>
                        </Grid>
                    </Row>
                </form>
            </Paper>


        )
    }

}