import './A_OrginalFont.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_OrginalFont extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      correct: false
    }
  }

  componentDidUpdate() {
    const { answered } = this.props

    if (answered == true) {
      this.setState({
        correct: true
      })
    }
  }

  render() {
    const { originalFont } = this.props
    const { correct } = this.state

    const classes = classnames({
      A_OrginalFont: true,
      correct: correct
    })

    const styles = {
      fontFamily: `${originalFont}`
    }
    return (
      <div className={classes}>
        <p style={styles}>{originalFont}</p>
      </div>
    )
  }
}
