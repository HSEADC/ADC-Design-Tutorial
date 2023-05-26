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
      incorrect: false,
      ticked: false
    }
  }

  componentDidUpdate() {
    const { answered, status } = this.props

    if (answered) {
      if (status == 'correct') {
        this.setState({
          correct: true
        })
      }
      if (status == 'incorrect') {
        this.setState({
          incorrect: true
        })
      }
    }
  }

  handleClick = (picked) => {
    const { answered } = this.props

    if (answered == false) {
      this.setState({
        ticked: true
      })
    }
  }

  render() {
    const { body, defenition, status, handleClick, answered } = this.props
    const { correct, incorrect, ticked } = this.state

    const classes = classnames({
      M_RadioOptionWide: true,
      correct: correct,
      incorrect: incorrect,
      ticked: ticked
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="inner">
          <A_RadioButton
            correct={correct}
            incorrect={incorrect}
            status={status}
            handleClick={handleClick}
            answered={answered}
          />
          <p>
            {body}
            <p className="hidden">{defenition}</p>
          </p>
        </div>
      </div>
    )
  }
}
