import './A_Button.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props
    return (
      <div className="A_Button" onClick={handleClick}>
        <h4>{text}</h4>
      </div>
    )
  }
}
