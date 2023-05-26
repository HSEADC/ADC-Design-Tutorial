import './O_CheckboxQuestion.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import M_CheckOptionWide from '../../moleculas/M_CheckOptionWide/M_CheckOptionWide.jsx'
import A_Button from '../../atoms/A_Button/A_Button.jsx'

export default class O_CheckboxQuestion extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      answered: false
    }
  }

  handleClick = () => {
    const { answered } = this.state
    this.setState({
      answered: true
    })
  }

  render() {
    const { answered } = this.state
    const { answerOptions, name } = this.props

    const classes = classnames({
      O_CheckboxQuestion: true,
      answered: answered
    })

    const options = answerOptions.map((option, i) => {
      return (
        <M_CheckOptionWide
          body={option.body}
          status={option.status}
          defenition={option.defenition}
          answered={answered}
          key={i}
        />
      )
    })

    return (
      <div className={classes}>
        <h4>{name}</h4>
        <div className="pack">{options}</div>

        <A_Button text="Ответить" handleClick={this.handleClick} />
      </div>
    )
  }
}
