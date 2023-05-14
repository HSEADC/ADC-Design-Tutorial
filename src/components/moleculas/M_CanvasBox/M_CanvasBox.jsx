import './M_CanvasBox.scss'

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import A_Text from '../../atoms/A_Text/A_Text.jsx'
import A_Canvas from '../../atoms/A_Canvas/A_Canvas.jsx'

export default class M_CanvasBox extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      header,
      text,
      exercise,
      handleMouseUp,
      handleMouseDown,
      handleMouseMove,
      circles,
      size,
      receiveCoord
    } = this.props

    return (
      <div className="M_CanvasBox">
        <A_Text header={header} text={text} />
        <A_Canvas
          handleMouseUp={handleMouseUp}
          handleMouseDown={handleMouseDown}
          handleMouseMove={handleMouseMove}
          exercise={exercise}
          circles={circles}
          receiveCoord={receiveCoord}
        ></A_Canvas>
      </div>
    )
  }
}