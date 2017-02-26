import React, { Component } from 'react'
import ChannelList from './components/ChannelList'
import ChannelForm from './components/ChannelForm'

export default class Channels extends Component {

    render() {
        return (
            <div className="container">
            <ChannelForm {...this.props} />
            <ChannelList channels={this.props.channels} />
            </div>
        )
    }

}