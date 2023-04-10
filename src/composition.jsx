import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import MOD_Rangefinder from './components/modules/MOD_Rangefinder.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const container1 = document.getElementById('container1')
  const root1 = createRoot(container1)
  root1.render(<MOD_Rangefinder />)
})
