import './M_AlertBox.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import A_Button from '../../atoms/A_Button/A_Button.jsx'

export default class M_AlertBox extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    window.location.reload()
  }

  render() {
    const { errorHeader, errorText } = this.props

    return (
      <div className="M_AlertBox">
        <h3>{errorHeader}</h3>
        <p>{errorText}</p>
        <A_Button handleClick={this.handleClick} text="Начать сначала" />
      </div>
    )
  }
}
