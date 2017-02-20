import React, { Component } from 'react'
import ChannelList from './components/ChannelList'
import ChannelForm from './components/ChannelForm'

export default class Channels extends Component {

    componentDidMount() {
        this.props.socket.emit('channels', )
        
    }

    render() {
        return (
            <div>
                <ChannelForm {...this.props}/>
                <ChannelList channels={this.props.channels} />
            </div>
        )
    }

}