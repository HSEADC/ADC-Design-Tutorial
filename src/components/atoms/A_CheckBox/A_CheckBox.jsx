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
    const { handleClick } = this.props
    const { checked } = this.state

    this.setState({
      checked: true
    })

    if (checked) {
      this.setState({
        checked: false
      })
    }
    handleClick(checked)
  }

  componentDidUpdate() {
    const { correct, incorrect } = this.props
    if (incorrect) {
      this.setState({
        incorrect: true,
        checked: false
      })
    }
    if (correct) {
      this.setState({
        correct: true,
        checked: false
      })
    }
  }

  render() {
    const { checked, correct, incorrect } = this.state

    const classes = classnames({
      A_CheckBox: true,
      checked: checked,
      correct: correct,
      incorrect: incorrect
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
