import './A_Slider.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Slider extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // window.addEventListener('mouseup', this.handleMouseUp)
    // window.addEventListener('mousemove', this.handleMouseMove)
    // window.addEventListener('mousedown', this.handleMouseDown)
  }

  handleMouseDown = (e) => {
    const { handleMouseDown } = this.props
    e.preventDefault()
    handleMouseDown(e)
  }

  handleMouseMove = (e) => {
    const { handleMouseMove } = this.props
    e.preventDefault()
    handleMouseMove(e)
  }

  handleMouseUp = (e) => {
    const { handleMouseUp } = this.props
    e.preventDefault()
    handleMouseUp(e)
  }

  render() {
    const { coord, sliderWidth } = this.props

    const styles = {
      transform: `translateX(${coord}px)`
    }

    const sliderStyles = {
      width: `(${sliderWidth}px)`
    }

    return (
      <div style={sliderStyles} className="A_Slider">
        <div
          className="Thumb"
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          style={styles}
        ></div>
      </div>
    )
  }
}
