import React, { Component } from 'react'

export default class CounterDisplay extends Component {
    
  render() {
    return (
      <>
      <h2>All Clicks counter: {this.props.count}</h2>
      </>
    )
  }
}
