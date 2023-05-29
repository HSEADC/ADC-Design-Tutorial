import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_Cell.scss'

export default class A_Cell extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleMouseDown = (e) => {
    const { handleMouseDown } = this.props
    e.preventDefault()
    handleMouseDown(e)
  }

  handleMouseMove = (e) => {
    const { handleMouseMove } = this.props
    e.preventDefault()
    handleMouseMove(e)
  }

  handleMouseUp = (e) => {
    const { handleMouseUp } = this.props
    e.preventDefault()
    handleMouseUp(e)
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.props.handleMouseDown)
    window.addEventListener('mouseup', this.props.handleMouseUp)
    window.addEventListener('mousemove', this.props.handleMouseMove)
  }

  render() {
    const { text, xPosition, yPosition } = this.props

    const styles = {
      transform: `translate(${xPosition}px, ${yPosition}px)`
    }

    return (
      <div className="A_Cell" style={styles}>
        {text}
      </div>
    )
  }
}
