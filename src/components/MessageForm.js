import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

export default class MessageForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    getValidationState() {
        const length = this.state.value.lenght
        if (length <= 0) return 'error'
        else if (length > 0) return 'success'
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="footerPost">
            <form>
                <FormGroup controlId="formBasicText"
                    validationState={this.getValidationState()}>
                    <ControlLabel>Type below to post</ControlLabel>
                    <FormControl type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange} />
                    <FormControl.Feedback />
                </FormGroup>
                <Button type="submit">
                    Post
            </Button>
            </form>
            </div>
        )
    }

}