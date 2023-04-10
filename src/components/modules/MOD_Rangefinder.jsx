import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import M_SliderIndicated from '../moleculas/M_SliderIndicated/M_SliderIndicated.jsx'

export default class MOD_Rangefinder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      range: 0
    }
  }

  handleInput = (e) => {
    const { isOn } = this.state
    const { value } = e.target

    this.setState({
      range: value
    })
  }

  render() {
    const { range } = this.state
    const min = 0
    const max = 240
    const step = 1

    return (
      <div className="MOD_Rangefinder">
        <M_SliderIndicated
          description={`расстояние: ${range}`}
          min={min}
          max={max}
          step={step}
          value={range}
          handleInput={this.handleInput}
        />
      </div>
    )
  }
}
