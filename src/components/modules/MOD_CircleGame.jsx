import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_CanvasBox from '../moleculas/M_CanvasBox/M_CanvasBox.jsx'
import A_Circle from '../atoms/A_Circle/A_Circle.jsx'

export default class MOD_CircleGameEx extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      circleCount: 0,
      objects: [],
      cursorXStart: 0,
      cursorYStart: 0,
      mouseDown: false,
      width: 0,
      height: 0,
      size: 0,
      x: 0,
      y: 0,
      xPosition: 0,
      yPosition: 0
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
      height,
      x,
      y,
      size,
      xPosition,
      yPosition
    } = this.state

    this.setState({
      circleCount: circleCount + 1,
      mouseDown: true,
      cursorXStart: e.clientX,
      cursorYStart: e.clientY,
      size: 0,
      xPosition: e.clientX - x,
      yPosition: e.clientY - y,
      objects: [
        ...objects,
        {
          number: circleCount + 1,
          cursorXStart: cursorXStart,
          cursorYStart: cursorYStart,
          size: size,
          xCoord: xPosition,
          yCoord: yPosition
        }
      ]
    })
  }

  handleMouseMove = (e) => {
    const {
      mouseDown,
      cursorXStart,
      cursorYStart,
      width,
      height,
      x,
      size,
      objects,
      circleCount,
      xPosition,
      yPosition
    } = this.state

    const newCircle = objects.map((object) => {
      if (object.number === circleCount) {
        return {
          ...object,
          cursorXStart: cursorXStart,
          cursorYStart: cursorYStart,
          size: size,
          xCoord: xPosition,
          yCoord: yPosition
        }
      } else {
        return object
      }
    })
    // Re-render with the new array
    if (this.state.mouseDown) {
      this.setState({
        width: e.clientX - cursorXStart,
        height: e.clientY - cursorYStart,
        objects: newCircle
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
      if (width < 0) {
        this.setState({
          width: width * -1
        })
      }
      if (height < 0) {
        this.setState({
          height: height * -1
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
      height,
      size
    } = this.state

    if (mouseDown) {
      this.setState({
        mouseDown: false
      })
    }
  }

  receiveCoord = (result) => {
    this.setState({
      x: result.x,
      y: result.y
    })
  }

  render() {
    const { info } = this.props
    const {
      objects,
      cursorXStart,
      size,
      circleCount,
      xPosition,
      yPosition
    } = this.state

    const circles = objects.map((object, i) => {
      return (
        <A_Circle
          number={object.number}
          x={object.cursorXStart}
          y={object.cursorYStart}
          key={object.number}
          id={object.number + 1}
          size={object.size}
          xPosition={object.xCoord}
          yPosition={object.yCoord}
          circleCount={circleCount}
        ></A_Circle>
      )
    })

    return (
      <>
        <M_CanvasBox
          header={info[1].header}
          text={info[1].text}
          handleMouseUp={this.handleMouseUp}
          handleMouseDown={this.handleMouseDown}
          handleMouseMove={this.handleMouseMove}
          circles={circles}
          receiveCoord={this.receiveCoord}
        />
      </>
    )
  }
}
