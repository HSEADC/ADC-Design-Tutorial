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
      errorText: '',
      xCoord: 0,
      yCoord: 0
    }
  }

  handleMouseDown = (e) => {
    e.preventDefault()
    const {
      objects,
      circleCount,
      cursorXStart,
      cursorYStart,

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
      xCoord: e.clientX - x,
      yCoord: e.clientY - y,
      size: 0,
      xPosition: e.clientX - x,
      yPosition: e.clientY - y,
      objects: [
        ...objects,
        {
          number: circleCount + 1,
          size: 0,
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
        if (object.number === this.state.circleCount) {
          // проблема здесь
          return {
            ...object,
            size:
              object.size * 0 +
              Math.max(
                e.clientX - cursorXStart,
                e.clientY - cursorYStart,
                (e.clientY - cursorYStart) * -1,
                (e.clientX - cursorXStart) * -1
              )
          }
          console.log(this.state.size)
        } else {
          return object
        }
      })

      this.setState({
        objects: newCircle,
        size: Math.max(
          e.clientX - cursorXStart,
          e.clientY - cursorYStart,
          (e.clientY - cursorYStart) * -1,
          (e.clientX - cursorXStart) * -1
        )
      })

      if (size > maxSize) {
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

      size
    } = this.state

    if (mouseDown) {
      this.setState({
        mouseDown: false,
        maxSize: size,
        size: 0
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
      //
      // if (this.state.xCoord < this.state.x) {
      //   this.setState({
      //     borderFailed: true,
      //     missionFailed: true
      //   })
      // }
      // if (this.state.yCoord > this.state.y) {
      //   this.setState({
      //     borderFailed: true,
      //     missionFailed: true
      //   })
      // }

      if (
        object.number != this.state.circleCount &&
        this.state.xCoord + this.state.size > object.xCoord &&
        this.state.yCoord + this.state.size > object.yCoord &&
        this.state.xCoord < object.xCoord &&
        this.state.yCoord < object.yCoord
      ) {
        this.setState({
          collisionFailed: true,
          missionFailed: true
        })
      }

      if (
        object.number != this.state.circleCount &&
        this.state.xCoord + this.state.size > object.xCoord &&
        this.state.yCoord + this.state.size > object.yCoord &&
        this.state.xCoord < object.xCoord &&
        this.state.yCoord < object.yCoord
      ) {
        this.setState({
          collisionFailed: true,
          missionFailed: true
        })
      }

      if (
        object.number != this.state.circleCount &&
        object.xCoord + object.size > this.state.xCoord &&
        this.state.yCoord + this.state.size > object.yCoord &&
        this.state.xCoord > object.xCoord &&
        this.state.yCoord < object.yCoord
      ) {
        this.setState({
          collisionFailed: true,
          missionFailed: true
        })
      }

      if (
        object.number != this.state.circleCount &&
        this.state.yCoord < object.yCoord + object.size &&
        object.xCoord + object.size > this.state.xCoord &&
        this.state.xCoord > object.xCoord &&
        this.state.yCoord > object.yCoord
      ) {
        this.setState({
          collisionFailed: true,
          missionFailed: true
        })
      }
      if (
        object.number != this.state.circleCount &&
        object.yCoord + object.size > this.state.yCoord &&
        object.xCoord < this.state.xCoord + this.state.size &&
        this.state.xCoord < object.xCoord &&
        this.state.yCoord > object.yCoord
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
