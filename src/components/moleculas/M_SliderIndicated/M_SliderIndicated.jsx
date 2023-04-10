import './M_SliderIndicated.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import A_SliderSpecial from '../../atoms/A_SliderSpecial/A_SliderSpecial.jsx'
import A_TaskState from '../../atoms/A_TaskState/A_TaskState.jsx'

export default class M_SliderIndicated extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { description, min, max, step, value, handleInput } = this.props

    return (
      <div className="M_SliderIndicated">
        <div className="W_SliderHeader">
          <A_TaskState type="sliderDescription" text={description} />
        </div>

        <A_SliderSpecial
          min={min}
          max={max}
          step={step}
          value={value}
          handleInput={handleInput}
        />
      </div>
    )
  }
}
