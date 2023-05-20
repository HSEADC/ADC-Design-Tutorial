import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_ExerciseBox from '../moleculas/M_ExerciseBox/M_ExerciseBox.jsx'
import M_GridBox from '../moleculas/M_GridBox/M_GridBox.jsx'
import A_Figure from '../atoms/A_Figure/A_Figure.jsx'

import { sample } from '../../composition.jsx'

export default class MOD_ContrastEditor extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      size: 544,
      figures: [],
      colorSelected: false,
      formSelected: false,
      sizeSelected: false
    }
  }

  handleClick = (type, selected) => {
    if (type === 'color' && selected === false) {
      this.setState({
        colorSelected: true
      })
    } else if (type === 'color' && selected === true) {
      this.setState({
        colorSelected: false
      })
    }
    if (type === 'size' && selected === false) {
      this.setState({
        sizeSelected: true
      })
    }
    if (type === 'size' && selected === true) {
      this.setState({
        sizeSelected: false
      })
    }
    if (type === 'form' && selected === false) {
      this.setState({
        formSelected: true
      })
    }
    if (type === 'form' && selected === true) {
      this.setState({
        formSelected: false
      })
    }
  }

  handleBallClick = (number) => {
    const { colorSelected, formSelected, sizeSelected, figures } = this.state
    const { colors, forms } = this.props

    if (colorSelected) {
      const newCircle = figures.map((figure) => {
        if (number === figure.number) {
          return {
            ...figure,
            color: sample(colors)
          }
        } else {
          return figure
        }
      })
      this.setState({
        figures: newCircle
      })
    }

    if (formSelected) {
      const newCircle = figures.map((figure) => {
        if (number === figure.number) {
          return {
            ...figure,
            border: '0',
            clip: sample(forms)
          }
        } else {
          return figure
        }
      })
      this.setState({
        figures: newCircle
      })
    }

    if (colorSelected && formSelected) {
      const newCircle = figures.map((figure) => {
        if (number === figure.number) {
          return {
            ...figure,
            border: '0',
            clip: sample(forms),
            color: sample(colors)
          }
          console.log(sample(colors))
        } else {
          return figure
        }
      })
      this.setState({
        figures: newCircle
      })
    }
  }

  componentDidMount() {
    this.setState({
      figures: this.props.figures
    })
  }

  generateExercise = () => {
    const { figures } = this.state
    const { color } = this.state

    const rounds = figures.map((figure) => {
      return (
        <A_Figure
          row={figure.row}
          column={figure.column}
          number={figure.number}
          key={figure.number}
          color={figure.color}
          border={figure.border}
          clip={figure.clip}
          handleBallClick={this.handleBallClick}
        />
      )
    })

    return <M_GridBox rounds={rounds} handleClick={this.handleClick} />
  }

  render() {
    const { size } = this.state
    const { info, figures } = this.props

    return (
      <M_ExerciseBox
        header={info[2].header}
        text={info[2].text}
        exercise={this.generateExercise()}
        size={size}
      />
    )
  }
}
