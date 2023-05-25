import './M_CheckOptionWide.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import A_CheckBox from '../../atoms/A_CheckBox/A_CheckBox.jsx'

export default class M_CheckOptionWide extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ticked: false
    }
  }

  handleClick = () => {
    // const { type, handleClick } = this.props
    const { correct } = this.state
    this.setState({
      ticked: true
    })
    if (this.state.selected) {
      this.setState({
        ticked: false
      })
    }
    // handleClick(type, selected)
  }

  render() {
    const { errorHeader, errorText } = this.props

    const classes = classnames({
      M_CheckOptionWide: true,
      ticked: this.state.ticked
    })

    const optiontext = 'Привет! Вопросов нет!!!'

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="inner">
          <A_CheckBox />
          <p>{optiontext}</p>
        </div>
      </div>
    )
  }
}
