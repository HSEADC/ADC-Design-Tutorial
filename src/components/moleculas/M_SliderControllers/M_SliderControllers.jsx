import React, { PureComponent } from 'react'
import Q_MeatBall from '../../quarks/Q_Meatball/Q_Meatball.jsx'
import './M_SliderControllers.scss'

export default class M_SliderControllers extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleChangeIndex, imageUrls, activeIndex } = this.props

    return (
      <div className="M_SliderController">
        <div
          className="Q_Icon arrow-left"
          onClick={() => handleChangeIndex(activeIndex - 1)}
        ></div>

        <div className="С_MeatBalls">
          {imageUrls.map((img, index) => (
            <Q_MeatBall key={index} selected={index === activeIndex} />
          ))}
        </div>

        <div
          className="Q_Icon arrow-right"
          onClick={() => handleChangeIndex(activeIndex + 1)}
        ></div>
      </div>
    )
  }
}
