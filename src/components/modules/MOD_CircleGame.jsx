import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_CanvasBox from '../moleculas/M_CanvasBox/M_CanvasBox.jsx'
import M_AlertBox from '../moleculas/M_AlertBox/M_AlertBox.jsx'
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
      canvasWidth: 0,
      canvasHeight: 0,
      xPosition: 0,
      yPosition: 0,
      maxSize: 10000,
      missionFailed: false,
      sizeFailed: false,
      borderFailed: false,
      collisionFailed: false,
      errorHeader: '',
      errorText: ''
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
          size: this.state.size,
          xCoord: e.clientX - x,
          yCoord: e.clientY - y,
          cursorXStart: e.clientX,
          cursorYStart: e.clientY
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
      yPosition,
      maxSize
    } = this.state

    if (this.state.mouseDown) {
      const newCircle = objects.map((object) => {
        if (object.number === circleCount) {
          return {
            ...object,
            size: size,
            xCoord: xPosition,
            yCoord: yPosition
          }
        } else {
          return object
        }
      })

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

      // тут костыль, так быть не должно ;(
      if (size > maxSize + 2) {
        this.setState({
          sizeFailed: true,
          missionFailed: true
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
        mouseDown: false,
        maxSize: size
      })
    }
  }

  receiveCoord = (result) => {
    this.setState({
      x: result.x,
      y: result.y,
      canvasWidth: result.width,
      canvasHeight: result.height
    })
  }

  componentDidUpdate() {
    const newCircle = this.state.objects.map((object) => {
      if (object.size > this.state.canvasHeight - object.yCoord) {
        this.setState({
          borderFailed: true,
          missionFailed: true
        })
      }
      if (object.size > this.state.canvasWidth - object.xCoord) {
        this.setState({
          borderFailed: true,
          missionFailed: true
        })
      }
      if (
        object.number != this.state.circleCount &&
        object.size + object.cursorXStart > this.state.cursorXStart &&
        object.cursorXStart < this.state.cursorXStart &&
        object.size + object.cursorYStart > this.state.cursorYStart &&
        object.cursorYStart < this.state.cursorYStart
      ) {
        this.setState({
          collisionFailed: true,
          missionFailed: true
        })
      }

      if (
        object.number != this.state.circleCount &&
        object.cursorXStart < this.state.cursorXStart + this.state.size &&
        object.cursorXStart > this.state.cursorXStart &&
        object.cursorYStart < this.state.cursorYStart + this.state.size &&
        object.cursorYStart > this.state.cursorYStart
      ) {
        this.setState({
          collisionFailed: true,
          missionFailed: true
        })
      }

      if (
        object.number != this.state.circleCount &&
        object.cursorXStart + object.size > this.state.cursorXStart &&
        this.state.cursorYStart + this.state.size > object.cursorYStart &&
        this.state.cursorXStart + this.state.size > object.cursorXStart
      ) {
        this.setState({
          collisionFailed: true,
          missionFailed: true
        })
      }
      if (this.state.sizeFailed == true) {
        this.setState({
          errorHeader: `Вы уместили ${this.state.circleCount} кругов`,
          errorText: 'Ваш последний круг оказался больше предыдущего'
        })
      }
      if (this.state.borderFailed == true) {
        this.setState({
          errorHeader: `Вы уместили ${this.state.circleCount} кругов`,
          errorText: 'Ваш последний круг вышел за пределы холста'
        })
      }
      if (this.state.collisionFailed == true) {
        this.setState({
          errorHeader: `Вы уместили ${this.state.circleCount} кругов`,
          errorText: 'Ваш последний круг задел другой'
        })
      }
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
      yPosition,
      missionFailed
    } = this.state

    const circles = objects.map((object) => {
      return (
        <A_Circle
          number={object.number}
          key={object.number}
          size={object.size}
          xPosition={object.xCoord}
          yPosition={object.yCoord}
        />
      )
    })

    const failCheck = this.state.missionFailed
    let alert
    if (failCheck) {
      alert = (
        <M_AlertBox
          errorHeader={this.state.errorHeader}
          errorText={this.state.errorText}
        />
      )
    } else {
    }

    return (
      <>
        <M_CanvasBox
          header={info[1].header}
          text={info[1].text}
          handleMouseUp={this.handleMouseUp}
          handleMouseDown={this.handleMouseDown}
          handleMouseMove={this.handleMouseMove}
          circles={circles}
          alert={alert}
          receiveCoord={this.receiveCoord}
          compareCircles={this.compareCircles}
          missionFailed={missionFailed}
        />
      </>
    )
  }
}
