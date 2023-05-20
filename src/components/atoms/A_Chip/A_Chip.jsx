import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_Chip.scss'

export default class A_Chip extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  handleClick = () => {
    const { type, handleClick } = this.props
    const { selected } = this.state
    this.setState({
      selected: true
    })
    if (this.state.selected) {
      this.setState({
        selected: false
      })
    }
    handleClick(type, selected)
  }

  render() {
    const { text } = this.props
    const { selected } = this.state

    const classes = classnames({
      A_Chip: true,
      selected: selected
    })

    return (
      <div className={classes} selected={selected} onClick={this.handleClick}>
        {text}
      </div>
    )
  }
}
