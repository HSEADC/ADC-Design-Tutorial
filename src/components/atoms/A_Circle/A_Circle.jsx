import './A_Circle.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Circle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      curSize: 0
    }
  }

  render() {
    const { size, number, id, circleCount } = this.props

    if (id == circleCount) {
      this.setState({
        curSize: size
      })
    }

    const styles = {
      width: `${this.state.curSize}px`,
      height: `${this.state.curSize}px`
    }

    return (
      <div style={styles} className="A_Circle">
        <p>{number}</p>
      </div>
    )
  }
}
