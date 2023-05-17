import './A_Circle.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Circle extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { size, xPosition, yPosition } = this.props

    const styles = {
      width: `${size}px`,
      height: `${size}px`,
      transform: `translate(${xPosition}px, ${yPosition}px)`
    }

    return <div style={styles} className="A_Circle"></div>
  }
}
