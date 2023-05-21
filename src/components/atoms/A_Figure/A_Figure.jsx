import './A_Figure.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { sample } from '../../../composition.jsx'

export default class A_Figure extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      scale: 1,
      degrees: [0, 90, -90, 180, -180],
      rotate: 0
    }
  }

  handleBallClick = () => {
    const { number, handleBallClick } = this.props
    handleBallClick(number)
  }

  componentDidUpdate() {
    const { clip } = this.props
    const { degrees } = this.state
    if (clip == 'polygon(50% 31.7%, 50% 31.7%, 75% 75%, 25% 75%)') {
      this.setState({
        scale: 2,
        rotate: sample(degrees)
      })
    }
    if (clip == 'unset') {
      this.setState({
        scale: 1,
        rotate: 0
      })
    }
    if (clip == 'circle(50% at 50% 50%)') {
      this.setState({
        scale: 1,
        rotate: 0
      })
    }
  }

  render() {
    const {
      row,
      column,
      number,
      color,
      handleBallClick,
      border,
      clip,
      rEnd,
      cEnd,
      size,
      display
    } = this.props

    const style = {
      gridRowStart: `${row}`,
      gridColumnStart: `${column}`,
      gridRowEnd: `${rEnd}`,
      gridColumnEnd: `${cEnd}`,
      backgroundColor: `${color}`,
      borderRadius: `${border}%`,
      clipPath: `${clip}`,
      scale: `${this.state.scale}`,
      width: `${size}px`,
      height: `${size}px`,
      display: `${display}`,
      rotate: `${this.state.rotate}deg`
    }

    return (
      <div
        className="A_Figure"
        style={style}
        onClick={this.handleBallClick}
      ></div>
    )
  }
}
