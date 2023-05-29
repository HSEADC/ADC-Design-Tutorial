import './A_OrginalFont.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_OrginalFont extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { originalFont } = this.props

    const styles = {
      fontFamily: `${originalFont}`
    }
    return (
      <div className="A_OrginalFont">
        <p style={styles}>{originalFont}</p>
      </div>
    )
  }
}
