import React, { PureComponent } from 'react'
import './O_Slider.scss'
import '../../quarks/Q_Icon.scss'
import M_SliderControllers from '../../moleculas/M_SliderControllers/M_SliderControllers.jsx'

export default class O_Slider extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      imageUrls: props.imageUrls,
      activeIndex: 0
    }
  }

  updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = this.state.imageUrls.length - 1
    } else if (newIndex >= this.state.imageUrls.length) {
      newIndex = 0
    }

    this.setState((prevState) => ({
      ...prevState,
      activeIndex: newIndex
    }))
  }

  render() {
    const { activeIndex, imageUrls } = this.state

    return (
      <div className="O_Slider">
        <div className="W_SliderFrame">
          <div
            className="C_SliderRail"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {imageUrls.map((imageUrl) => (
              <img key={imageUrl} className="Q_SliderImage" src={imageUrl} />
            ))}
          </div>
        </div>

        <M_SliderControllers
          imageUrls={imageUrls}
          activeIndex={activeIndex}
          handleChangeIndex={this.updateIndex}
        />
      </div>
    )
  }
}
