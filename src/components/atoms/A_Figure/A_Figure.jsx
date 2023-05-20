import './A_Figure.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Figure extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      scale: 1
    }
  }

  handleBallClick = () => {
    const { number, handleBallClick } = this.props
    handleBallClick(number)
  }

  componentDidUpdate() {
    const { clip } = this.props
    if (clip == 'polygon(50% 31.7%, 50% 31.7%, 75% 75%, 25% 75%)') {
      this.setState({
        scale: 2
      })
    }
    if (clip == 'unset') {
      this.setState({
        scale: 1
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
      clip
    } = this.props

    const style = {
      gridRowStart: `${row}`,
      gridColumnStart: `${column}`,
      backgroundColor: `${color}`,
      borderRadius: `${border}%`,
      clipPath: `${clip}`,
      scale: `${this.state.scale}`
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
