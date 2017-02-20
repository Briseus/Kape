import React, { Component } from 'react'
import Channel from './Channel'

export default class ChannelList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            channels: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            channels: nextProps.channels
        })
    }

    componentWillMount() {
        this.setState({
            channels: this.props.channels
        })
    }

    render() {
        if (this.state.channels === undefined) {
            return null
        }
        const channelNodes = this.state.channels.map((channel) => {
            return (
                <Channel key={channel.name} channel={channel} />
            )
        })
        return (
            <div>
                {channelNodes}
            </div>
        )
    }

}