import './M_BubbleFilled.scss'
import classnames from 'classnames'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import A_Bubble from '../../atoms/A_Bubble/A_Bubble.jsx'
import A_TextCell from '../../atoms/A_TextCell/A_TextCell.jsx'

export default class M_BubbleFilled extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      correct: false,
      incorrect: false
    }
  }

  handleClick = () => {
    const { handleClick, font, answered, originalFont } = this.props

    if (answered == false) {
      if (font == originalFont) {
        this.setState({
          correct: true
        })
      } else {
        this.setState({
          incorrect: true
        })
      }
    }

    handleClick()
  }

  componentDidUpdate() {
    const { font, answered, originalFont } = this.props

    if (answered == true && font == originalFont) {
      this.setState({
        correct: true
      })
    }
  }

  generateTextCell = () => {
    const { innerRotate, font } = this.props
    return <A_TextCell innerRotate={innerRotate} font={font} />
  }

  render() {
    const { number, transformX, transformY, rotate } = this.props
    const { correct, incorrect } = this.state

    const styles = {
      transform: `translate(${transformX}px, ${transformY}px)`,
      rotate: `${rotate}deg`
    }

    const classes = classnames({
      M_BubbleFilled: true,
      correct: correct,
      incorrect: incorrect
    })

    return (
      <div className={classes} style={styles} onClick={this.handleClick}>
        <A_Bubble textCell={this.generateTextCell()} />
      </div>
    )
  }
}
