import './A_SliderSpecial.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Range from '../../../images/rangefinder.svg'
import Arrows from '../../../images/arrows.svg'

export default class A_SliderSpecial extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp)
    window.addEventListener('mousemove', this.handleMouseMove)
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
    const { coord, id, signature, display } = this.props

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
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
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
