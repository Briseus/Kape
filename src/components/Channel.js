import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {Link} from 'react-router'

export default class Channel extends Component {

    render() {
        return (
            <Paper>
                <Link to={"/chat/"+this.props.channel.name} ><p> {this.props.channel.name} </p></Link>
            </Paper>
        )
    }
}