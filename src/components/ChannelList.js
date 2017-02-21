import React, { Component } from 'react'
import Subheader from 'material-ui/Subheader'
import {List, ListItem} from 'material-ui/List'
import {Link} from 'react-router'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import Theme from './../Theme'

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
            return (<div></div>)
        }
        const channelNodes = this.state.channels.map((channel) => {
            const firstLetter = channel.charAt(0).toUpperCase()
            return (
                <div  key={channel}>
                <ListItem
                leftAvatar={
                    <Avatar
                    color={Theme.palette.alternateTextColor}
                    backgroundColor={Theme.palette.accent1Color}>
                    {firstLetter}
                    </Avatar>
                }
                insetChildren={true}
                containerElement={<Link to={"/chat/"+channel} />}
                primaryText={channel}/>
                <Divider inset={true} />
                </div>
            )
        })

        return (
            <div>
                <List>
                    <Subheader> Channels </Subheader>
                {channelNodes}
                </List>
            </div>
        )
    }

}