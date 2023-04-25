import './A_Frame.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Frame extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { exercise } = this.props

    return <div className="frame">{exercise}</div>
  }
}
