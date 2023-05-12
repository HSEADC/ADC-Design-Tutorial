import './A_Frame.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Frame extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { size, exercise } = this.props
    const style = {
      height: `${size}px`
    }

    return (
      <div className="A_Frame" style={style}>
        {exercise}
      </div>
    )
  }
}
