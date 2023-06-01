import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_AlternativeExerciseBox from '../moleculas/M_AlternativeExerciseBox/M_AlternativeExerciseBox.jsx'
import A_ColorBrick from '../atoms/A_ColorBrick/A_ColorBrick.jsx'
import A_Cell from '../atoms/A_Cell/A_Cell.jsx'

export default class MOD_ColorPick extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      colors: [],
      words: []
    }
  }

  // handleMouseDown = (e) => {}

  // handleMouseMove = (e) => {}

  // handleMouseUp = (e) => {}

  componentDidMount() {
    const { colorBricks, words } = this.props
    this.setState({
      colors: colorBricks,
      words: words
    })
    window.addEventListener('load', this.receiveCoord)
  }

  receiveCoord = (x, number) => {
    const { colors } = this.state

    console.log(x, number)

    const updatedColors = colors.map((color) => {
      if (number == color.number) {
        return {
          ...color,
          x: x
        }
      } else {
        return color
      }
    })
    this.setState({
      colors: updatedColors
    })
  }

  render() {
    const { info, words } = this.props
    const { size, colors, display, flexDirection, flexWrap } = this.state

    const bricks = colors.map((brick, i) => {
      return (
        <A_ColorBrick
          receiveCoord={this.receiveCoord}
          color={brick.digital}
          key={i}
          number={brick.number}
        />
      )
    })

    const cellsShow = words.map((cell, i) => {
      return (
        <A_Cell
          text={cell.text}
          key={i}
          // handleMouseDown={handleMouseDown}
          // handleMouseMove={handleMouseMove}
          // handleMouseUp={handleMouseUp}
        />
      )
    })

    return (
      <M_AlternativeExerciseBox
        header={info[4].header}
        text={info[4].text}
        bricks={bricks}
        size={size}
        cellsShow={cellsShow}
      />
    )
  }
}
