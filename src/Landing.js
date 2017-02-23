import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import { Grid, Row, Col } from 'react-bootstrap'
import logo from './logo.svg'

export default class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            errorText: ""
        }
    }

    componentWillMount() {
        if (this.props.user.name !== undefined && this.props.user.name !== "Anon") {
            this.setState({
                value: this.props.user.name
            })
        }
    }

    onSubmit = () => {
        if (this.state.value.length >= 3) {
            this.props.updateUser(this.state.value)
        }

    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
        if (this.state.value.length >= 3) {
            this.setState({
                errorText: ""
            })
            this.props.updateUser(this.state.value)
        } else {
            this.setState({
                errorText: "Nick has to be atleast 3 chars"
            })
        }
    }

    render() {
        return (
            <div>
                <Grid style={{ padding: 50 }}>
                    <Row style={{ minHeight: 300, textAlign: 'center' }}>
                        <img src={logo} alt="main logo" style={{ maxHeight: 200, paddingTop: 25 }} />
                        <h1> Kape chat </h1>
                        <h3> An instant messaging app build with React, Socket.io and Express.js. </h3>
                    </Row>
                </Grid>
                <Grid >
                    <Row style={{ minHeight: 200, textAlign: 'center' }}>
                        <h1> To Get started </h1>
                        <Col xs={12}>
                            <TextField
                                inputStyle={{ textAlign: 'center' }}
                                hintStyle={{ textAlign: 'center', width: '250px' }}
                                hintText={"Choose a nickname"}
                                errorText={this.state.errorText}
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </Col>
                        <Col xs={12} style={{ marginTop: 15 }}>
                            <h4> Or dont it's cool </h4>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: 'center', marginTop: 15, paddingBottom: 50 }}>
                        <RaisedButton

                            onTouchTap={this.onSubmit}
                            containerElement={<Link to={"/chat"} />}
                            secondary={true}
                            label={"Start chatting"} />
                    </Row>
                </Grid>
            </div>
        )
    }
}