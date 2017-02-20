import React, { Component } from 'react'
import ChannelList from './components/ChannelList'
import ChannelForm from './components/ChannelForm'
import { Grid, Row } from 'react-bootstrap'

export default class Channels extends Component {

    componentDidMount() {
        this.props.socket.emit('channels', )
    }

    render() {
        return (
            <Grid>
                <Row>
                    <ChannelForm {...this.props} />
                    <ChannelList channels={this.props.channels} />
                </Row>
            </Grid>
        )
    }

}