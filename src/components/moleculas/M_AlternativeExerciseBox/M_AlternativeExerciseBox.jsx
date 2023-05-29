import './M_AlternativeExerciseBox.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import A_Text from '../../atoms/A_Text/A_Text.jsx'
import A_AlternativeFrame from '../../atoms/A_AlternativeFrame/A_AlternativeFrame.jsx'

export default class M_AlternativeExerciseBox extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { header, text, size, bricks, cellsShow } = this.props

    return (
      <div className="M_AlternativeExerciseBox">
        <A_Text header={header} text={text} />
        <A_AlternativeFrame size={size} bricks={bricks} cellsShow={cellsShow} />
      </div>
    )
  }
}
