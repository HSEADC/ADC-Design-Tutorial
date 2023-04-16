import './A_SliderSpecial.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Range from '../../../images/rangefinder.svg'
import Arrows from '../../../images/arrows.svg'

export default class A_SliderSpecial extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
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

  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp)
    window.addEventListener('mousemove', this.handleMouseMove)
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
    const { cursorX, coord, cursorStart, coordNext } = this.state

    if (this.state.mouseDown) {
      // this.calcResult(coord)
      this.setState({
        cursorX: e.screenX,
        coord: coordNext + e.screenX - cursorStart
      })
    }

    // if (cursorX < cursorStart) {
    //   // если положение курсора меньше стартового
    //   this.setState({
    //     coord: 0
    //   })
    // }
    //
    // if (cursorX > cursorStart + 200) {
    //   // если положение курсора больше стартового на 200
    //   this.setState({
    //     coord: 200
    //   })
    // }

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
    const { coord, id, signature, display } = this.state

    const styles = {
      transform: `translateX(${coord}px)`
    }

    const imageStyles = {
      display: `${display}`
    }

    return (
      <div className="Slider-wrap">
        <img src={Range} />
        <div className="Slider-body">
          <div
            className="Thumb"
            onMouseDown={this.handleMouseDown}
            style={styles}
          >
            <label id={id}>
              <img src={Arrows} style={imageStyles} /> {signature}
            </label>
          </div>
        </div>
      </div>
    )
  }
}
