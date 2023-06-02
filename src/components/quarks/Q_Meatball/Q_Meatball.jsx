import React, { PureComponent } from 'react'
import './Q_Meatball.scss'

export default class Q_MeatBall extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { selected } = this.props
    const className = selected ? 'Q_MeatBall Q_MeatBall_selected' : 'Q_MeatBall'
    return <div className={className}></div>
  }
}
