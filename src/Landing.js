import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'
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
        if (this.state.value.length !== 0) {
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
            <div>
                <Grid style={{ padding: 50 }}>
                    <Row style={{ minHeight: '30vh', textAlign: 'center' }}>
                        <img src={logo} alt="main logo" style={{ maxHeight: '20vh', paddingTop: 25 }} />
                        <h1> Kape chat </h1>
                        <h3> An instant messaging app build with React, Socket.io and Express.js. </h3>
                    </Row>
                </Grid>
                <Grid>
                    <Row style={{ minHeight: '20vh', textAlign: 'center' }}>
                        <h3> To Get started </h3>
                        <Col xs={12}>
                            <TextField
                                inputStyle={{ textAlign: 'center' }}
                                hintStyle={{ textAlign: 'center', width: '250px' }}
                                hintText={"Choose a nickname"}
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </Col>
                        <Col xs={12} style={{ marginTop: 15 }}>
                            <h4> Or dont it's cool </h4>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: 'center', padding: 25 }}>
                        <RaisedButton
                            containerElement={<Link to={"/chat"} />}
                            onTouchTap={this.onSubmit}
                            secondary={true}
                            label="Start chatting" />
                    </Row>
                </Grid>
            </div>
        )
    }
}