import './A_Circle.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_Circle extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp)
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  render() {
    const { number, x, y, size } = this.props
    const styles = {
      width: `${size}px`,
      height: `${size}px`
    }

    return (
      <div style={styles} className="A_Circle">
        <p>{number}</p>
        <p>{x}</p>
        <p>{y}</p>
      </div>
    )
  }
}
