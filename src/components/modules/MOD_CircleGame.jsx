import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_CanvasBox from '../moleculas/M_CanvasBox/M_CanvasBox.jsx'
import A_Circle from '../atoms/A_Circle/A_Circle.jsx'

export default class MOD_CircleGameEx extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      circleCount: 1,
      objects: [],
      cursorXStart: 0,
      cursorYStart: 0,
      mouseDown: false,
      width: 0,
      height: 0,
      size: 0,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
  }

  handleMouseDown = (e) => {
    e.preventDefault()
    const {
      objects,
      circleCount,
      cursorXStart,
      cursorYStart,
      width,
      height
    } = this.state

    objects.push({
      number: circleCount,
      cursorXStart: cursorXStart,
      cursorYStart: cursorYStart,
      width: width,
      height: height
    })

    this.setState({
      circleCount: circleCount + 1,
      mouseDown: true,
      cursorXStart: e.screenX,
      cursorYStart: e.screenY,
      size: 1
    })
  }

  handleMouseMove = (e) => {
    const { mouseDown, cursorXStart, cursorYStart, width, height } = this.state

    if (this.state.mouseDown) {
      this.setState({
        width: e.screenX - cursorXStart,
        height: e.screenY - cursorYStart
      })

      if (width < height) {
        this.setState({
          size: height
        })
      }

      if (width > height) {
        this.setState({
          size: width
        })
      }
    }
  }

  handleMouseUp = (e) => {
    e.preventDefault()

    const {
      mouseDown,
      objects,
      circleCount,
      cursorXStart,
      cursorYStart,
      width,
      height
    } = this.state

    if (mouseDown) {
      this.setState({
        mouseDown: false
      })
    }
  }

  receiveCoord = (result) => {
    console.log(result)
    this.setState({
      top: result.top,
      bottom: result.bottom,
      right: result.right,
      left: result.left
    })
  }

  render() {
    const { info } = this.props
    const { objects, cursorXStart, size, circleCount } = this.state

    const circles = objects.map((object) => {
      return (
        <A_Circle
          number={object.number}
          x={object.cursorXStart}
          y={object.cursorYStart}
          key={object.number}
          id={object.number + 1}
          size={size}
          circleCount={circleCount}
        ></A_Circle>
      )
    })

    return (
      <M_CanvasBox
        header={info[1].header}
        text={info[1].text}
        handleMouseUp={this.handleMouseUp}
        handleMouseDown={this.handleMouseDown}
        handleMouseMove={this.handleMouseMove}
        circles={circles}
        receiveCoord={this.receiveCoord}
      />
    )
  }
}
