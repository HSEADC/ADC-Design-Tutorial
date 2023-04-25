import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_ExerciseBox from '../moleculas/M_ExerciseBox/M_ExerciseBox.jsx'
import A_SliderSpecial from '../atoms/A_SliderSpecial/A_SliderSpecial.jsx'

export default class MOD_Rangefinder extends PureComponent {
  constructor(props) {
    super(props)
  }

  generateFrameHeader = () => {
    return <h3>Упражнение на&nbsp;поиск промежутка </h3>
  }
  generateFrameText = () => {
    return (
      <p>
        {' '}
        Перед вами 5&nbsp;кругов, 4&nbsp;из&nbsp;которых находятся
        на&nbsp;одинаковом расстоянии. С&nbsp;помощью ползунка расположите пятый
        круг на&nbsp;такое же&nbsp;расстояние.{' '}
      </p>
    )
  }

  generateExercise = () => {
    return <A_SliderSpecial></A_SliderSpecial>
  }

  render() {
    return (
      <M_ExerciseBox
        header={this.generateFrameHeader()}
        text={this.generateFrameText()}
        exercise={this.generateExercise()}
      />
    )
  }
}
