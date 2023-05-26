import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_RadioButton.scss'
import '../../quarks/Q_Icon.scss'

export default class A_RadioButton extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      correct: false,
      incorrect: false,
      picked: false
    }
  }

  handleClick = () => {
    const { handleClick, answered } = this.props
    const { picked } = this.state

    if (answered == false) {
      this.setState({
        picked: true
      })
    }

    handleClick(picked)
  }

  componentDidUpdate() {
    const { status, answered } = this.props

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

  render() {
    const { picked, correct, incorrect } = this.state

    const classes = classnames({
      A_RadioButton: true,
      correct: correct,
      incorrect: incorrect,
      picked: picked
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="Q_Icon redCross" />
        <div className="Q_Icon greenTick" />
      </div>
    )
  }
}
