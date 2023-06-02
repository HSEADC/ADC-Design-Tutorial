import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import O_Slider from './components/organisms/O_Slider/O_Slider.jsx'
import SlideOne from './images/color/selection/logo1.png'
import SlideTwo from './images/color/selection/logo2.png'
import SlideThree from './images/color/selection/logo3.png'
import SlideFour from './images/color/selection/logo4.png'
import SlideFive from './images/color/selection/logo5.png'

import './index.scss'

const imageUrls = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive]

document.addEventListener('DOMContentLoaded', () => {
  const imageSlider = document.getElementById('imageSlider')
  const root = createRoot(imageSlider)
  root.render(<O_Slider imageUrls={imageUrls} />)
})
