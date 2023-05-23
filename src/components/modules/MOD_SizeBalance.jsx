import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_ExerciseBox from '../moleculas/M_ExerciseBox/M_ExerciseBox.jsx'
import A_Slider from '../atoms/A_Slider/A_Slider.jsx'

export default class MOD_SizeBalance extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      size: 436,
      mouseDown: false,
      coord: 0,
      cursorStart: 0,
      min: 0,
      max: 120,
      coordPrev: 0,
      sliderWidth: 150,
      signature: '',
      display: 'block',
      text: '',
      color: 'var(--dark)',
      semiColor: 'var(--border)'
    }
  }

  generateExercise = () => {
    const { coord, sliderWidth } = this.state
    return (
      <A_Slider
        coord={coord}
        handleMouseMove={this.handleMouseMove}
        handleMouseDown={this.handleMouseDown}
        handleMouseUp={this.handleMouseUp}
        sliderWidth={sliderWidth}
      ></A_Slider>
    )
  }

  squares = () => {
    const { coord, text, color, semiColor } = this.state
    const styleOne = {
      width: `100px`,
      height: `100px`,
      backgroundColor: `var(--dark)`
    }

    const styleTwo = {
      width: `${100 + coord}px`,
      height: `${100 + coord}px`,
      backgroundColor: `var(--border)`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      fontFamily: `Proxima Nova`,
      fontWeight: `600`,
      fontSize: `24px`,
      color: `${color}`,
      border: `4px dashed ${color}`,
      backgroundColor: `${semiColor}`
    }
    const styleThree = {
      width: `300px`,
      height: `300px`,
      backgroundColor: `var(--dark)`
    }
    const boxStyle = {
      display: `flex`,
      justifyContent: `space-around`,
      width: `100%`,
      marginBottom: `25px`,
      alignItems: `flex-end`,
      paddingLeft: `50px`,
      paddingRight: `50px`
    }

    return (
      <div className="box" style={boxStyle}>
        <div className="Square-1" style={styleOne} />
        <div className="Square-2" style={styleTwo}>
          {text}
        </div>
        <div className="Square-3" style={styleThree} />
      </div>
    )
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
    // const {} = this.state

    if (this.state.coord <= 105 && this.state.coord >= 95) {
      this.setState({
        text: 'Супер!',
        color: '#08661D',
        semiColor: '#DFFDE7'
      })
    }

    if (this.state.coord > 105) {
      this.setState({
        text: 'Многовато!',
        color: '#660808',
        semiColor: '#FDDFDF'
      })
    }

    if (this.state.coord < 95) {
      this.setState({
        text: 'Маловато!',
        color: '#660808',
        semiColor: '#FDDFDF'
      })
    }
  }

  render() {
    const { size } = this.state
    const { info } = this.props

    return (
      <M_ExerciseBox
        header={info[3].header}
        text={info[3].text}
        exercise={this.generateExercise()}
        size={size}
        squares={this.squares()}
      />
    )
  }
}
