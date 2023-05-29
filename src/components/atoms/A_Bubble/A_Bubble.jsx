import './A_Bubble.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Bubble extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { textCell } = this.props
    return (
      <div className="A_Bubble">
        <div className="head">{textCell}</div>
        <div className="leg"></div>
      </div>
    )
  }
}
