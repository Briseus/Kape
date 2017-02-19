import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.value != 0) {
            this.props.updateUser(this.state.value)
        }

    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <Paper>
                <Grid>
                    <Row>
                        <h1> Welcome to kape chat </h1>
                        <Col xs={12} md={6}>
                            <TextField
                                hintText={"Username"}
                                floatingLabelText={"Create a nickname"}
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </Col>
                        <Col xs={12} md={6}>
                            <h2> Or dont it's cool </h2>

                        </Col>
                    </Row>
                    <Row>
                        <RaisedButton
                            containerElement={<Link to={"chat"} />}
                            onTouchTap={this.onSubmit}
                            label="Chat" />
                    </Row>
                </Grid>
            </Paper>
        )
    }
}