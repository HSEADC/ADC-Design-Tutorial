import './M_RadioOptionWide.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import A_RadioButton from '../../atoms/A_RadioButton/A_RadioButton.jsx'

export default class M_RadioOptionWide extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      correct: false,
      incorrect: false
    }
  }

  handleClick = () => {
    // const { type, handleClick } = this.props
    const { correct } = this.state
    this.setState({
      correct: true
    })
    if (this.state.selected) {
      this.setState({
        correct: false
      })
    }
    // handleClick(type, selected)
  }

  render() {
    const { errorHeader, errorText } = this.props

    const classes = classnames({
      M_RadioOptionWide: true,
      correct: this.state.correct,
      incorrect: this.state.incorrect
    })

    const optiontext = 'Привет! Вопросов нет!!!'

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="inner">
          <A_RadioButton />
          <p>{optiontext}</p>
        </div>
      </div>
    )
  }
}
