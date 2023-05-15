import './A_Canvas.scss'

import React, { PureComponent, useRef } from 'react'
import ReactDOM from 'react-dom'

export default class A_Canvas extends PureComponent {
  constructor(props) {
    super(props)
    this.position = React.createRef()
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

  receiveCoord = () => {
    const { receiveCoord } = this.props
    receiveCoord(this.position.current.getBoundingClientRect())
  }

  componentDidMount() {
    window.addEventListener('load', this.receiveCoord)
  }

  render() {
    const {
      exercise,
      handleClick,
      circles,
      handleMouseUp,
      handleMouseDown,
      handleMouseMove,
      receiveCoord
    } = this.props

    return (
      <div
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        className="A_Canvas"
        ref={this.position}
      >
        {circles}
      </div>
    )
  }
}
