import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_CheckBox.scss'
import '../../quarks/Q_Icon.scss'

export default class A_CheckBox extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      correct: false,
      incorrect: false
    }
  }

  handleClick = () => {
    const { type, handleClick } = this.props
    const { checked } = this.state
    this.setState({
      checked: true
    })
    if (this.state.checked) {
      this.setState({
        checked: false
      })
    }
    // handleClick(type, selected)
  }

  render() {
    const { img } = this.props
    const { selected } = this.state

    const classes = classnames({
      A_CheckBox: true,
      checked: this.state.checked,
      correct: this.state.correct,
      incorrect: this.state.incorrect
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="Q_Icon redCross" />
        <div className="Q_Icon greenTick" />
        <div className="Q_Icon neutralTick" />
      </div>
    )
  }
}
