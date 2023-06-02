import './A_MenuSubItem.scss'
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_MenuSubItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, url } = this.props
    return (
      <a href={url}>
        <div className="A_MenuSubItem">{name}</div>
      </a>
    )
  }
}
