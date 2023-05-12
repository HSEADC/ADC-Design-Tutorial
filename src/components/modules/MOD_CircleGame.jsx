import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import M_CanvasBox from '../moleculas/M_CanvasBox/M_CanvasBox.jsx'
import A_Circle from '../atoms/A_Circle/A_Circle.jsx'

export default class MOD_CircleGame extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      circleCount: 1,
      circleNumber: []
    }
  }

  handleMouseUp = () => {
    const { circleNumber, circleCount } = this.state

    this.setState({ circleCount: circleCount + 1 })

    circleNumber.push({ number: circleCount })

    console.log(circleNumber)
  }

  render() {
    const { info } = this.props
    const { circleNumber } = this.state
    const circles = circleNumber.map((circleNumber, i) => {
      return <A_Circle number={circleNumber.number} key={i}></A_Circle>
    })

    return (
      <M_CanvasBox
        header={info[1].header}
        text={info[1].text}
        handleMouseUp={this.handleMouseUp}
        circles={circles}
      ></M_CanvasBox>
    )
  }
}
