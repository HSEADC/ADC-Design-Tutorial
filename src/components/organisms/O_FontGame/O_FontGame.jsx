import './O_FontGame.scss'
import classnames from 'classnames'
import { sample } from '../../../composition.jsx'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import M_BubbleFilled from '../../moleculas/M_BubbleFilled/M_BubbleFilled.jsx'
import A_OrginalFont from '../../atoms/A_OrginalFont/A_OrginalFont.jsx'

export default class O_FontGame extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      bubbles: [],
      answered: false,
      originalFont: ''
    }
  }

  handleClick = () => {
    const { answered } = this.state
    if (answered == false) {
      this.setState({
        answered: true
      })
    }
  }

  componentDidMount() {
    const { bubbles, fonts } = this.props

    this.setState({
      bubbles: bubbles,
      originalFont: sample(fonts)
    })
  }

  render() {
    const { bubbles, originalFont, answered } = this.state

    const newBubbles = bubbles.map((bubble, i) => {
      return (
        <M_BubbleFilled
          number={bubble.number}
          transformX={bubble.transformX}
          transformY={bubble.transformY}
          rotate={bubble.rotate}
          innerRotate={bubble.innerRotate}
          font={bubble.font}
          key={bubble.number}
          handleClick={this.handleClick}
          answered={answered}
          originalFont={originalFont}
        />
      )
    })

    return (
      <div className="O_FontGame">
        {newBubbles}
        <A_OrginalFont answered={answered} originalFont={originalFont} />
      </div>
    )
  }
}
