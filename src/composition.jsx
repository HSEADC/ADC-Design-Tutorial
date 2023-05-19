import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import MOD_Rangefinder from './components/modules/MOD_Rangefinder.jsx'

import MOD_CircleGame from './components/modules/MOD_CircleGame.jsx'

const info = [
  {
    header: `Упражнение на\u00A0поиск промежутка`,
    text: `  Перед вами 5\u00A0кругов, 4\u00A0из\u00A0которых находятся
    на\u00A0одинаковом расстоянии. С\u00A0помощью ползунка расположите пятый
    круг на\u00A0такое же\u00A0расстояние.`
  },

  {
    header: `Упражнение на\u00A0поэтапное уменьшение`,
    text: `  Перед вами пустой холст. Зажмите левую кнопку мыши\u00A0и, удерживая\u00A0её, ведите курсор вниз. На\u00A0холсте появится квадрат, а\u00A0как только вы\u00A0отпустите кнопку\u00A0\u2014 квадрат перестанет расти.

Ваша задача\u00A0\u2014 уместить на\u00A0холсте как можно больше квадратов, НО: вы\u00A0не\u00A0можете выходить за\u00A0пределы холста, каждый новый квадрат должен быть меньше предыдущего, квадраты не\u00A0должны задевать друг-друга.

Чем больше квадратов вы\u00A0уместите на\u00A0холсте\u00A0\u2014 тем лучше результат!`
  }
]

document.addEventListener('DOMContentLoaded', () => {
  // const container1 = document.getElementById('container1')
  // const root1 = createRoot(container1)
  // root1.render(<MOD_Rangefinder info={info} />)

  const container2 = document.getElementById('container2')
  const root2 = createRoot(container2)
  root2.render(<MOD_CircleGame info={info} />)
})
