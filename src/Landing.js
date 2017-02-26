import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import logo from './logo.svg'
import './App.css'
import Theme from './Theme'

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
            <div className="container block">
                <img src={logo} alt="main logo" className="logo" />
                <h1> Kape chat </h1>
                <span style={{fontSize: 22, color: Theme.palette.primary1Color}}> An instant messaging app build with React, Socket.io and Express.js. </span>
                <div className="block">
                    <span style={{fontSize: 20}}> To Get started... </span>
                    <div className="button">
                        <TextField
                            inputStyle={{ textAlign: 'center' }}
                            hintStyle={{ textAlign: 'center', width: '250px' }}
                            hintText={"Choose a nickname"}
                            errorText={this.state.errorText}
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </div>
                    <span style={{fontSize: 18}}> Or dont it's cool </span>
                    <div className="button">
                        <RaisedButton
                            onTouchTap={this.onSubmit}
                            containerElement={<Link to={"/chat"} />}
                            secondary={true}
                            label={"Start chatting"} />
                    </div>
                </div>
            </div>
        )
    }
}