import React, { Component } from 'react'

export default class extends Component {

   
  render() {
    return (
    <div>
        <h2>Even clicks counter: {this.props.even}</h2>
    </div>
    )
  }
}
