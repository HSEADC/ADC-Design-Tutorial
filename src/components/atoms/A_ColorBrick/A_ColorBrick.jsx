import './A_ColorBrick.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class A_ColorBrick extends PureComponent {
  constructor(props) {
    super(props)
    this.position = React.createRef()

    this.state = {
      x: 0,
      y: 0
    }
  }

  receiveCoord = () => {
    const { receiveCoord, number } = this.props
    const { x } = this.state
    this.position.current.getBoundingClientRect()

    this.setState({
      x: this.position.current.getBoundingClientRect().x,
      y: this.position.current.getBoundingClientRect().y
    })

    receiveCoord(x, number)
  }

  componentDidMount() {
    window.addEventListener('load', this.receiveCoord)
    window.addEventListener('scroll', this.receiveCoord)
  }

  render() {
    const { color, result } = this.props
    const styles = {
      backgroundColor: `${color}`
    }

    return (
      <div className="A_ColorBrick" style={styles} ref={this.position}>
        <h3></h3>
      </div>
    )
  }
}
