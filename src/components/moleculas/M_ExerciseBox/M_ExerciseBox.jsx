import './M_ExerciseBox.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import A_Text from '../../atoms/A_Text/A_Text.jsx'
import A_Frame from '../../atoms/A_Frame/A_Frame.jsx'

export default class M_ExerciseBox extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { header, text, size, exercise } = this.props

    return (
      <div className="box">
        <A_Text header={header} text={text} />
        <A_Frame exercise={exercise} size={size}></A_Frame>
      </div>
    )
  }
}
