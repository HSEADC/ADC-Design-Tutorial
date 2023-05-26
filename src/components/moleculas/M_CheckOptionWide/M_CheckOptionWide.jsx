import './M_CheckOptionWide.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import A_CheckBox from '../../atoms/A_CheckBox/A_CheckBox.jsx'

export default class M_CheckOptionWide extends PureComponent {
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

  handleClick = (checked) => {
    if (checked == false) {
      this.setState({
        ticked: true
      })
    }
    if (checked == true) {
      this.setState({
        ticked: false
      })
    }
  }

  render() {
    const { body, defenition, status } = this.props
    const { correct, incorrect, ticked } = this.state

    const classes = classnames({
      M_CheckOptionWide: true,
      correct: correct,
      incorrect: incorrect,
      ticked: ticked
    })

    return (
      <div className={classes}>
        <div className="inner">
          <A_CheckBox
            correct={correct}
            incorrect={incorrect}
            handleClick={this.handleClick}
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
