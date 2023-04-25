import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import A_SliderSpecial from './components/atoms/A_SliderSpecial/A_SliderSpecial.jsx'

import MOD_Rangefinder from './components/modules/MOD_Rangefinder.jsx'

document.addEventListener('DOMContentLoaded', () => {
  // const container1 = document.getElementById('container1')
  // const root1 = createRoot(container1)
  // root1.render(<A_SliderSpecial />)

  const container2 = document.getElementById('container2')
  const root2 = createRoot(container2)
  root2.render(<MOD_Rangefinder />)
})
