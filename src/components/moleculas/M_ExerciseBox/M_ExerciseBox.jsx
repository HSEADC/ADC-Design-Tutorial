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
    const { header, text, size, exercise, squares } = this.props

    return (
      <div className="M_ExerciseBox">
        <A_Text header={header} text={text} />
        <A_Frame content={squares} exercise={exercise} size={size} />
      </div>
    )
  }
}
