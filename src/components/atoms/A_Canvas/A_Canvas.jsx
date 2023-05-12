import './A_Canvas.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Canvas extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { exercise, handleClick, circles, handleMouseUp } = this.props

    return (
      <div onMouseUp={handleMouseUp} className="A_Canvas">
        {circles}
      </div>
    )
  }
}
