import './M_MenuGroup.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import A_MenuItem from '../../atoms/A_MenuItem/A_MenuItem.jsx'
import A_MenuSubItem from '../../atoms/A_MenuSubItem/A_MenuSubItem.jsx'

export default class M_MenuGroup extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      subItems: []
    }
  }

  componentDidMount() {
    const { subItems } = this.props
    this.setState({
      subItems: subItems
    })
  }

  render() {
    const { main, url, active } = this.props
    const { subItems } = this.state

    const subs = subItems?.map((sub, i) => {
      return <A_MenuSubItem key={i} name={sub.name} url={sub.url} />
    })

    // console.log(subItems)

    return (
      <div className="M_MenuGroup">
        <A_MenuItem active={active} name={main} url={url} />
        {subs}
      </div>
    )
  }
}
