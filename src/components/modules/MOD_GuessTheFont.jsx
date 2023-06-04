import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_ExerciseBox from '../moleculas/M_ExerciseBox/M_ExerciseBox.jsx'
import O_FontGame from '../organisms/O_FontGame/O_FontGame.jsx'
import A_Button from '../atoms/A_Button/A_Button.jsx'

export default class MOD_GuessTheFont extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      size: 567
    }
  }

  handleClick = () => {
    window.location.reload()
  }

  generateButton = () => {
    return (
      <A_Button handleClick={this.handleClick} text="Попробовать ещё раз" />
    )
  }

  generateExercise = () => {
    const { bubbles, fonts } = this.props
    return <O_FontGame bubbles={bubbles} fonts={fonts} />
  }

  render() {
    const { size } = this.state
    const { info } = this.props

    return (
      <M_ExerciseBox
        header={info[5].header}
        text={info[5].text}
        exercise={this.generateExercise()}
        size={size}
        content={this.generateButton()}
      />
    )
  }
}
