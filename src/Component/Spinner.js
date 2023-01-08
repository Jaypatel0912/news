import React, { Component } from 'react'
import Load from './Load.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={Load} alt="Loading" />
      </div>
    )
  }
}
