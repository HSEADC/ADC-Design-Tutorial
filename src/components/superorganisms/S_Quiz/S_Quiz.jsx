import './S_Quiz.scss'
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import O_CheckboxQuestion from '../../organisms/O_CheckboxQuestion/O_CheckboxQuestion.jsx'
import O_RadioQuestion from '../../organisms/O_RadioQuestion/O_RadioQuestion.jsx'

export default class S_Quiz extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      questionsList: []
    }
  }

  componentDidMount() {
    const { questions } = this.props
    this.setState({
      questionsList: questions
    })
  }

  render() {
    const { quizName } = this.props
    const { questionsList } = this.state
    const questions = questionsList.map((question, i) => {
      if (question.type == 'Single') {
        return (
          <O_RadioQuestion
            name={question.name}
            answerOptions={question.answerOptions}
            key={i}
          />
        )
      }
      if (question.type == 'Multiple') {
        return (
          <O_CheckboxQuestion
            name={question.name}
            answerOptions={question.answerOptions}
            key={i}
          />
        )
      }
    })

    return (
      <div className="S_Quiz">
        <h3>{quizName}</h3>
        <div className="pack">{questions}</div>
      </div>
    )
  }
}
