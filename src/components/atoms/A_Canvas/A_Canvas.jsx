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
    window.addEventListener('mousedown', this.props.handleMouseDown)
    window.addEventListener('mouseup', this.props.handleMouseUp)
    window.addEventListener('mousemove', this.props.handleMouseMove)
  }

  componentDidUpdate() {
    const { missionFailed } = this.props

    if (missionFailed) {
      window.removeEventListener('mousedown', this.props.handleMouseDown)
      window.removeEventListener('mouseup', this.props.handleMouseUp)
      window.removeEventListener('mousemove', this.props.handleMouseMove)
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
      <div className="A_Canvas" ref={this.position}>
        {circles}
        {alert}
      </div>
    )
  }
}
