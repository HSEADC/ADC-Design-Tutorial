import './A_Circle.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Circle extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { number } = this.props

    return (
      <div className="A_Circle">
        <h1>{number}</h1>
      </div>
    )
  }
}
