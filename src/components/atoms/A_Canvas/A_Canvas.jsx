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
    window.addEventListener('scroll', this.receiveCoord)

    window.addEventListener('load', this.receiveCoord)
    this.position.current.addEventListener(
      'mousedown',
      this.props.handleMouseDown
    )
    this.position.current.addEventListener('mouseup', this.props.handleMouseUp)
    this.position.current.addEventListener(
      'mousemove',
      this.props.handleMouseMove
    )
  }

  componentDidUpdate() {
    const { missionFailed } = this.props

    if (missionFailed) {
      this.position.current.removeEventListener(
        'mousedown',
        this.props.handleMouseDown
      )
      this.position.current.removeEventListener(
        'mouseup',
        this.props.handleMouseUp
      )
      this.position.current.removeEventListener(
        'mousemove',
        this.props.handleMouseMove
      )
    }
  }

  render() {
    const {
      exercise,
      handleClick,
      circles,
      handleMouseUp,
      handleMouseDown,
      handleMouseMove,
      receiveCoord,
      handleChange,
      alert
    } = this.props

    return (
      <div
        className="A_Canvas"
        ref={this.position}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {circles}
        {alert}
      </div>
    )
  }
}
