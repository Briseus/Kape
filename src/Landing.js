import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { Grid, Row, Col } from 'react-bootstrap'
import logo from './logo.svg'

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

    render() {
        return (
                <Paper style={{ padding: 20, margin: 20}}>
                    <Grid>
                        <Row style={{ minHeight: '30vh', textAlign: 'center' }}>
                            <img src={logo} alt="main logo" style={{ maxHeight: '20vh', paddingTop: 25 }} />
                            <h1> Kape chat </h1>
                            <h3> An instant messaging app build with React, Socket.io and Express.js. </h3>
                        </Row>
                        <Row style={{ minHeight: '20vh', paddingTop: 30, textAlign: 'center' }}>
                            <h2> Get started </h2>
                            <Col xs={12} md={6}>
                                <TextField
                                style={{width: '100%'}}
                                    floatingLabelText={"Choose a nickname"}
                                    value={this.state.value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={12} md={6} style={{ marginTop: 15 }}>
                                <h3> Or dont it's cool </h3>
                            </Col>
                        </Row>
                        <Row style={{ textAlign: 'center', padding: 25 }}>
                            <RaisedButton
                                containerElement={<Link to={"/chat"} />}
                                onTouchTap={this.onSubmit}
                                label="Start chatting" />
                        </Row>
                    </Grid>
                </Paper>
        )
    }
}