import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_RadioButton.scss'
import '../../quarks/Q_Icon.scss'

export default class A_RadioButton extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      correct: false,
      incorrect: false
    }
  }

  handleClick = () => {
    const { type, handleClick } = this.props
    const { correct } = this.state
    this.setState({
      correct: true
    })
    if (this.state.correct) {
      this.setState({
        correct: false
      })
    }
    // handleClick(type, selected)
  }

  render() {
    const { selected } = this.state

    const classes = classnames({
      A_RadioButton: true,
      correct: this.state.correct,
      incorrect: this.state.incorrect
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="Q_Icon redCross" />
        <div className="Q_Icon greenTick" />
      </div>
    )
  }
}
