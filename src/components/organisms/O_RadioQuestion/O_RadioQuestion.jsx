import './O_RadioQuestion.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import M_RadioOptionWide from '../../moleculas/M_RadioOptionWide/M_RadioOptionWide.jsx'

export default class O_RadioQuestion extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      answered: false
    }
  }

  handleClick = (picked) => {
    const { answered } = this.state
    if (answered == false) {
      this.setState({
        answered: true
      })
    }
  }

  render() {
    const { answered } = this.state
    const { answerOptions, name } = this.props

    const classes = classnames({
      O_RadioQuestion: true,
      answered: answered
    })

    const options = answerOptions.map((option, i) => {
      return (
        <M_RadioOptionWide
          body={option.body}
          status={option.status}
          defenition={option.defenition}
          key={i}
          answered={answered}
          handleClick={this.handleClick}
        />
      )
    })

    return (
      <div className={classes}>
        <h4>{name}</h4>
        <div className="pack">{options}</div>
      </div>
    )
  }
}
