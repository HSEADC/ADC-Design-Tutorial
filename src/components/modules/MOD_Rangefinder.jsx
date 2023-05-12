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
      cursorX: 0,
      cursorStart: 0,
      coordNext: 0,
      signature: '',
      display: 'block',
      id: 'a'
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

  handleMouseDown = (e) => {
    console.log('Down!')
    e.preventDefault()
    const { cursorStart } = this.state

    this.setState({
      mouseDown: true,
      cursorStart: e.screenX
    })
  }

  handleMouseMove = (e) => {
    console.log('Move!')
    const { cursorX, coord, cursorStart, coordNext } = this.state

    if (this.state.mouseDown) {
      // this.calcResult(coord)
      this.setState({
        cursorX: e.screenX,
        coord: coordNext + e.screenX - cursorStart
      })
    }

    // ЗДЕСЬ НУЖНО БУДЕТ ИЗМЕНИТЬ УСЛОВИЯ ОГРАНИЧЕНИЙ!

    if (cursorX < cursorStart - coord) {
      // если положение курсора меньше стартового
      this.setState({
        coord: 0
      })
    }

    if (cursorX > cursorStart + 200) {
      // если положение курсора больше стартового на 200
      this.setState({
        coord: 200
      })
    }

    if (coord < 0) {
      // если положение курсора меньше стартового
      this.setState({
        coord: 0
      })
    }

    if (coord > 200) {
      // если положение курсора больше стартового на 200
      this.setState({
        coord: 200
      })
    }
  }

  handleMouseUp = (e) => {
    console.log('Up!')
    e.preventDefault()

    const { mouseDown, coord, coordNext } = this.state

    if (mouseDown) {
      this.calcResult(coord)
      this.setState({
        coordNext: coord,
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
