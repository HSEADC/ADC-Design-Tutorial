import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_ExerciseBox from '../moleculas/M_ExerciseBox/M_ExerciseBox.jsx'
import A_SliderSpecial from '../atoms/A_SliderSpecial/A_SliderSpecial.jsx'

export default class MOD_Rangefinder extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      size: 220,
      mouseDown: false,
      coord: 0,
      cursorStart: 0,
      coordPrev: 0,
      min: 0,
      max: 200,
      signature: '',
      display: 'block',
      id: 'a'
    }
  }

  handleMouseDown = (e) => {
    e.preventDefault()
    const { cursorStart } = this.state

    this.setState({
      mouseDown: true,
      cursorStart: e.screenX
    })
  }

  handleMouseMove = (e) => {
    const { coord, cursorStart, coordPrev, min, max } = this.state

    if (this.state.mouseDown) {
      this.setState({
        coord: coordPrev + e.screenX - cursorStart
      })

      if (coordPrev + e.screenX - cursorStart > max) {
        this.setState({
          coord: max
        })
      }
      if (coordPrev + e.screenX - cursorStart < min) {
        this.setState({
          coord: min
        })
      }
    }
  }

  handleMouseUp = (e) => {
    console.log('Up!')
    e.preventDefault()

    const { mouseDown, coord, coordPrev } = this.state

    if (mouseDown) {
      this.calcResult(coord)
      this.setState({
        coordPrev: coord,
        mouseDown: false
      })
    }
  }

  calcResult = (coord) => {
    const { id, signature, display } = this.state

    if (this.state.coord >= 103 && this.state.coord <= 113) {
      this.setState({
        id: 'b',
        signature: 'Правильно!',
        display: 'none'
      })
    } else {
      this.setState({
        id: 'c',
        signature: 'Неправильно!',
        display: 'none'
      })
    }
  }

  generateExercise = () => {
    const { coord, signature, display, id } = this.state
    return (
      <A_SliderSpecial
        coord={coord}
        handleMouseMove={this.handleMouseMove}
        handleMouseDown={this.handleMouseDown}
        handleMouseUp={this.handleMouseUp}
        signature={signature}
        display={display}
        id={id}
      ></A_SliderSpecial>
    )
  }

  render() {
    const { size } = this.state
    const { info } = this.props

    return (
      <M_ExerciseBox
        header={info[0].header}
        text={info[0].text}
        exercise={this.generateExercise()}
        size={size}
      />
    )
  }
}
