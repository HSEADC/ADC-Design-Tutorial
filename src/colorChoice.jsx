import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import O_Slider from './components/organisms/O_Slider/O_Slider.jsx'
import SlideOne from './images/color/choice/coloors1.png'
import SlideTwo from './images/color/choice/coloors2.png'

import './index.scss'

const imageUrls = [SlideOne, SlideTwo]

document.addEventListener('DOMContentLoaded', () => {
  const imageSlider = document.getElementById('imageSlider')
  const root = createRoot(imageSlider)
  root.render(<O_Slider imageUrls={imageUrls} />)
})
