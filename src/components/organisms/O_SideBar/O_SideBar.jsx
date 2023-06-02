import './O_SideBar.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import M_MenuGroup from '../../moleculas/M_MenuGroup/M_MenuGroup.jsx'

export default class O_SideBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      barItems: []
    }
  }

  componentDidMount() {
    const { barItems } = this.props

    this.setState({
      barItems: barItems
    })
  }

  render() {
    const { name } = this.props
    const { barItems } = this.state

    const groups = barItems.map((bar, i) => {
      return (
        <M_MenuGroup
          key={i}
          main={bar.main}
          url={bar.url}
          active={bar.active}
          subItems={bar.subItems}
        />
      )
    })

    return (
      <div className="O_Sidebar">
        <h4 id="sidebarHeader">{name}</h4>
        <div className="pack">{groups}</div>
      </div>
    )
  }
}
