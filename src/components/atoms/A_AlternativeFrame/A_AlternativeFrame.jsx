import './A_AlternativeFrame.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_AlternativeFrame extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { size, bricks, cellsShow } = this.props
    const style = {
      height: `${size}px`
    }

    return (
      <div className="A_AlternativeFrame" style={style}>
        <div className="upper"> {cellsShow}</div>
        <div className="lower"> {bricks}</div>
      </div>
    )
  }
}
