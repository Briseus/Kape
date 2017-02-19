import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import './App.css'
import Header from './components/AppBar'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            {this.props.children}
          </Row>
        </Grid>
      </div>
    );
  }
}
