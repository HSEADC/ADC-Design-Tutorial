import './A_SliderSpecial.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Range from '../../../images/rangefinder.svg'

export default class A_SliderSpecial extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  componentDidMount() {
    const { value } = this.props
    const input = this.input.current
    input.value = value
  }

  render() {
    const { min, max, step, handleInput } = this.props

    return (
      <div className="Slider-wrap">
        <img src={Range} />
        <input
          className="A_SliderSpecial"
          type="range"
          min={min}
          max={max}
          step={step}
          onInput={handleInput}
          ref={this.input}
        />
      </div>
    )
  }
}
