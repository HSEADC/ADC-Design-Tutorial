import './A_Circle.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Circle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      curSize: 0,
      curX: 0,
      curY: 0
    }
  }

  render() {
    const { size, number, id, circleCount, xPosition, yPosition } = this.props

    if (id == circleCount) {
      this.setState({
        curSize: size,
        curX: xPosition,
        curY: yPosition
      })
    }

    const styles = {
      width: `${this.state.curSize}px`,
      height: `${this.state.curSize}px`,
      transform: `translate(${this.state.curX}px, ${this.state.curY}px)`
    }

    return <div style={styles} className="A_Circle"></div>
  }
}
