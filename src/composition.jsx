import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import MOD_Rangefinder from './components/modules/MOD_Rangefinder.jsx'

const info = [
  {
    header: `Упражнение на\u00A0поиск промежутка`,
    text: `  Перед вами 5\u00A0кругов, 4\u00A0из\u00A0которых находятся
    на\u00A0одинаковом расстоянии. С\u00A0помощью ползунка расположите пятый
    круг на\u00A0такое же\u00A0расстояние.`
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const container1 = document.getElementById('container1')
  const root1 = createRoot(container1)
  root1.render(<MOD_Rangefinder info={info} />)
})
