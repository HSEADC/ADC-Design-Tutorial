import './A_Text.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Text extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { header, text } = this.props

    return (
      <div className="text">
        {header}
        {text}
      </div>
    )
  }
}
