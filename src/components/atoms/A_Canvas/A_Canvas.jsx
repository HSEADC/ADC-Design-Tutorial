import './A_Canvas.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Canvas extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleMouseDown = (e) => {
    const { handleMouseDown } = this.props
    e.preventDefault()
    handleMouseDown(e)
  }

  handleMouseMove = (e) => {
    const { handleMouseMove } = this.props
    e.preventDefault()
    handleMouseMove(e)
  }

  handleMouseUp = (e) => {
    const { handleMouseUp } = this.props
    e.preventDefault()
    handleMouseUp(e)
  }

  render() {
    const {
      exercise,
      handleClick,
      circles,
      handleMouseUp,
      handleMouseDown,
      handleMouseMove
    } = this.props

    return (
      <div
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        className="A_Canvas"
      >
        {circles}
      </div>
    )
  }
}
