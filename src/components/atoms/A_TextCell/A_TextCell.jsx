import './A_TextCell.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_TextCell extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { innerRotate, font } = this.props
    const styles = {
      rotate: `${innerRotate}deg`
    }

    const fontStyles = {
      fontFamily: `${font}`
    }

    return (
      <div className="A_TextCell" style={styles}>
        <div className="row">
          <p style={fontStyles}>Aa</p>
          <p style={fontStyles}>Bb</p>
        </div>
        <div className="row">
          <p style={fontStyles}>Dd</p>
          <p style={fontStyles}>Ee</p>
        </div>
      </div>
    )
  }
}
