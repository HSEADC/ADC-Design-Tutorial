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
      size: 614,
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

    if (sizeSelected) {
      const newCircle = figures.map((figure) => {
        // начало сектора ЛВ
        if (
          number === figure.number &&
          (number == 1 || number == 2 || number == 5 || number == 6)
        ) {
          if (
            // prettier-ignore
            (figure.column === 1 || figure.column === 2) && (figure.row === 1 ||figure.row === 2)
          ) {
            return {
              ...figure,
              column: 1,
              row: 1,
              cEnd: 3,
              rEnd: 3,
              size: 184
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 1 || number == 2 || number == 5 || number == 6) && (figure.column === 1 || figure.column === 2) && (figure.row === 1 || figure.row === 2)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ЛВ

        // начало сектора ЛН
        if (
          number === figure.number &&
          (number == 3 || number == 4 || number == 7 || number == 8)
        ) {
          if (
            // prettier-ignore
            (figure.column === 1 || figure.column === 2) && (figure.row === 3 ||figure.row === 4)
          ) {
            return {
              ...figure,
              column: 1,
              row: 3,
              cEnd: 3,
              rEnd: 5,
              size: 184
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 3 || number == 4 || number == 7 || number == 8) && (figure.column === 1 || figure.column === 2) && (figure.row === 3 || figure.row === 4)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ЛН

        // начало сектора ПВ
        if (
          number === figure.number &&
          (number == 9 || number == 10 || number == 13 || number == 14)
        ) {
          if (
            // prettier-ignore
            (figure.column === 3 || figure.column === 4) && (figure.row === 1 ||figure.row === 2)
          ) {
            return {
              ...figure,
              column: 3,
              row: 1,
              cEnd: 5,
              rEnd: 3,
              size: 184
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 9 || number == 10 || number == 13 || number == 14) && (figure.column === 3 || figure.column === 4) && (figure.row === 1 || figure.row === 2)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ПВ

        // начало сектора ПН
        if (
          number === figure.number &&
          (number == 11 || number == 12 || number == 15 || number == 16)
        ) {
          if (
            // prettier-ignore
            (figure.column === 3 || figure.column === 4) && (figure.row === 3 ||figure.row === 4)
          ) {
            return {
              ...figure,
              column: 3,
              row: 3,
              cEnd: 5,
              rEnd: 5,
              size: 184
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 11 || number == 12 || number == 15 || number == 16) && (figure.column === 3 || figure.column === 4) && (figure.row === 3 || figure.row === 4)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ПН
        else {
          return figure
        }
      })
      this.setState({
        figures: newCircle
      })
    }

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
        } else {
          return figure
        }
      })
      this.setState({
        figures: newCircle
      })
    }

    if (colorSelected && sizeSelected) {
      const newCircle = figures.map((figure) => {
        // начало сектора ЛВ
        if (
          number === figure.number &&
          (number == 1 || number == 2 || number == 5 || number == 6)
        ) {
          if (
            // prettier-ignore
            (figure.column === 1 || figure.column === 2) && (figure.row === 1 ||figure.row === 2)
          ) {
            return {
              ...figure,
              column: 1,
              row: 1,
              cEnd: 3,
              rEnd: 3,
              size: 184,
              color: sample(colors)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 1 || number == 2 || number == 5 || number == 6) && (figure.column === 1 || figure.column === 2) && (figure.row === 1 || figure.row === 2)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ЛВ

        // начало сектора ЛН
        if (
          number === figure.number &&
          (number == 3 || number == 4 || number == 7 || number == 8)
        ) {
          if (
            // prettier-ignore
            (figure.column === 1 || figure.column === 2) && (figure.row === 3 ||figure.row === 4)
          ) {
            return {
              ...figure,
              column: 1,
              row: 3,
              cEnd: 3,
              rEnd: 5,
              size: 184,
              color: sample(colors)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 3 || number == 4 || number == 7 || number == 8) && (figure.column === 1 || figure.column === 2) && (figure.row === 3 || figure.row === 4)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ЛН

        // начало сектора ПВ
        if (
          number === figure.number &&
          (number == 9 || number == 10 || number == 13 || number == 14)
        ) {
          if (
            // prettier-ignore
            (figure.column === 3 || figure.column === 4) && (figure.row === 1 ||figure.row === 2)
          ) {
            return {
              ...figure,
              column: 3,
              row: 1,
              cEnd: 5,
              rEnd: 3,
              size: 184,
              color: sample(colors)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 9 || number == 10 || number == 13 || number == 14) && (figure.column === 3 || figure.column === 4) && (figure.row === 1 || figure.row === 2)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ПВ

        // начало сектора ПН
        if (
          number === figure.number &&
          (number == 11 || number == 12 || number == 15 || number == 16)
        ) {
          if (
            // prettier-ignore
            (figure.column === 3 || figure.column === 4) && (figure.row === 3 ||figure.row === 4)
          ) {
            return {
              ...figure,
              column: 3,
              row: 3,
              cEnd: 5,
              rEnd: 5,
              size: 184,
              color: sample(colors)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 11 || number == 12 || number == 15 || number == 16) && (figure.column === 3 || figure.column === 4) && (figure.row === 3 || figure.row === 4)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ПН
        else {
          return figure
        }
      })
      this.setState({
        figures: newCircle
      })
    }
    if (formSelected && sizeSelected) {
      const newCircle = figures.map((figure) => {
        // начало сектора ЛВ
        if (
          number === figure.number &&
          (number == 1 || number == 2 || number == 5 || number == 6)
        ) {
          if (
            // prettier-ignore
            (figure.column === 1 || figure.column === 2) && (figure.row === 1 ||figure.row === 2)
          ) {
            return {
              ...figure,
              column: 1,
              row: 1,
              cEnd: 3,
              rEnd: 3,
              size: 184,
              border: '0',
              clip: sample(forms)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 1 || number == 2 || number == 5 || number == 6) && (figure.column === 1 || figure.column === 2) && (figure.row === 1 || figure.row === 2)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ЛВ

        // начало сектора ЛН
        if (
          number === figure.number &&
          (number == 3 || number == 4 || number == 7 || number == 8)
        ) {
          if (
            // prettier-ignore
            (figure.column === 1 || figure.column === 2) && (figure.row === 3 ||figure.row === 4)
          ) {
            return {
              ...figure,
              column: 1,
              row: 3,
              cEnd: 3,
              rEnd: 5,
              size: 184,
              border: '0',
              clip: sample(forms)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 3 || number == 4 || number == 7 || number == 8) && (figure.column === 1 || figure.column === 2) && (figure.row === 3 || figure.row === 4)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ЛН

        // начало сектора ПВ
        if (
          number === figure.number &&
          (number == 9 || number == 10 || number == 13 || number == 14)
        ) {
          if (
            // prettier-ignore
            (figure.column === 3 || figure.column === 4) && (figure.row === 1 ||figure.row === 2)
          ) {
            return {
              ...figure,
              column: 3,
              row: 1,
              cEnd: 5,
              rEnd: 3,
              size: 184,
              border: '0',
              clip: sample(forms)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 9 || number == 10 || number == 13 || number == 14) && (figure.column === 3 || figure.column === 4) && (figure.row === 1 || figure.row === 2)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ПВ

        // начало сектора ПН
        if (
          number === figure.number &&
          (number == 11 || number == 12 || number == 15 || number == 16)
        ) {
          if (
            // prettier-ignore
            (figure.column === 3 || figure.column === 4) && (figure.row === 3 ||figure.row === 4)
          ) {
            return {
              ...figure,
              column: 3,
              row: 3,
              cEnd: 5,
              rEnd: 5,
              size: 184,
              border: '0',
              clip: sample(forms)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 11 || number == 12 || number == 15 || number == 16) && (figure.column === 3 || figure.column === 4) && (figure.row === 3 || figure.row === 4)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ПН
        else {
          return figure
        }
      })
      this.setState({
        figures: newCircle
      })
    }
    if (colorSelected && formSelected && sizeSelected) {
      const newCircle = figures.map((figure) => {
        // начало сектора ЛВ
        if (
          number === figure.number &&
          (number == 1 || number == 2 || number == 5 || number == 6)
        ) {
          if (
            // prettier-ignore
            (figure.column === 1 || figure.column === 2) && (figure.row === 1 ||figure.row === 2)
          ) {
            return {
              ...figure,
              column: 1,
              row: 1,
              cEnd: 3,
              rEnd: 3,
              size: 184,
              border: '0',
              clip: sample(forms),
              color: sample(colors)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 1 || number == 2 || number == 5 || number == 6) && (figure.column === 1 || figure.column === 2) && (figure.row === 1 || figure.row === 2)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ЛВ

        // начало сектора ЛН
        if (
          number === figure.number &&
          (number == 3 || number == 4 || number == 7 || number == 8)
        ) {
          if (
            // prettier-ignore
            (figure.column === 1 || figure.column === 2) && (figure.row === 3 ||figure.row === 4)
          ) {
            return {
              ...figure,
              column: 1,
              row: 3,
              cEnd: 3,
              rEnd: 5,
              size: 184,
              border: '0',
              clip: sample(forms),
              color: sample(colors)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 3 || number == 4 || number == 7 || number == 8) && (figure.column === 1 || figure.column === 2) && (figure.row === 3 || figure.row === 4)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ЛН

        // начало сектора ПВ
        if (
          number === figure.number &&
          (number == 9 || number == 10 || number == 13 || number == 14)
        ) {
          if (
            // prettier-ignore
            (figure.column === 3 || figure.column === 4) && (figure.row === 1 ||figure.row === 2)
          ) {
            return {
              ...figure,
              column: 3,
              row: 1,
              cEnd: 5,
              rEnd: 3,
              size: 184,
              border: '0',
              clip: sample(forms),
              color: sample(colors)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 9 || number == 10 || number == 13 || number == 14) && (figure.column === 3 || figure.column === 4) && (figure.row === 1 || figure.row === 2)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ПВ

        // начало сектора ПН
        if (
          number === figure.number &&
          (number == 11 || number == 12 || number == 15 || number == 16)
        ) {
          if (
            // prettier-ignore
            (figure.column === 3 || figure.column === 4) && (figure.row === 3 ||figure.row === 4)
          ) {
            return {
              ...figure,
              column: 3,
              row: 3,
              cEnd: 5,
              rEnd: 5,
              size: 184,
              border: '0',
              clip: sample(forms),
              color: sample(colors)
            }
          }
        }
        if (
          // prettier-ignore
          number !== figure.number && (number == 11 || number == 12 || number == 15 || number == 16) && (figure.column === 3 || figure.column === 4) && (figure.row === 3 || figure.row === 4)
        ) {
          return {
            ...figure,
            display: 'none'
          }
        }
        // конец сектора ПН
        else {
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
          cEnd={figure.cEnd}
          rEnd={figure.rEnd}
          size={figure.size}
          display={figure.display}
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
