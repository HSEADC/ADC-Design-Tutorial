import './A_MenuItem.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_MenuItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  componentDidMount() {
    const { active } = this.props
    if (active == 'true') {
      this.setState({
        selected: true
      })
    }
  }

  render() {
    const { name, url } = this.props
    const { selected } = this.state

    const classes = classnames({
      A_MenuItem: true,
      selected: selected
    })

    return (
      <a href={url}>
        <div className={classes}>{name}</div>
      </a>
    )
  }
}
