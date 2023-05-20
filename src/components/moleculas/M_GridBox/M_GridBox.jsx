import './M_GridBox.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import A_Chip from '../../atoms/A_Chip/A_Chip.jsx'

export default class M_GridBox extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { rounds, handleClick } = this.props
    const type = ['color', 'form', 'size']

    return (
      <>
        <div className="M_ChipBar">
          <A_Chip
            handleClick={handleClick}
            type={type[0]}
            text="Контраст по цвету"
          />
          <A_Chip
            handleClick={handleClick}
            type={type[1]}
            text="Контраст по форме"
          />
          <A_Chip
            handleClick={handleClick}
            type={type[2]}
            text="Контраст по размеру"
          />
        </div>

        <div className="M_GridBox">{rounds}</div>
      </>
    )
  }
}
