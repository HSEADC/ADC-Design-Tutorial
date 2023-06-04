import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

const barItems = [
  {
    main: 'Что такое сетка?',
    url: 'base.html',
    active: 'true',
    subItems: [
      {
        name: 'Где используют сетку?',
        url: 'base.html#gridUse'
      },
      {
        name: 'О важности сетки',
        url: 'base.html#importance'
      },
      {
        name: 'Что бывает, если игнорировать сетку?',
        url: 'base.html#ifIgnore'
      }
    ]
  },
  {
    main: 'Использование сетки',
    url: 'usage.html',
    active: 'false',
    subItems: [
      {
        name: 'Как создать сетку?',
        url: 'usage.html#tutorial'
      },
      {
        name: 'Примеры использования сетки',
        url: 'usage.html#references'
      }
    ]
  },

  {
    main: 'Итог',
    url: 'gridSummary.html'
  }
]

const myID = document.getElementById('O_SideBarSpec')

const myScrollFunc = function () {
  const y = window.scrollY
  if (y >= 600 || y < 2100) {
    myID.className = 'show'
  }
  if (y <= 600 || y > 2100) {
    myID.className = 'hide'
  }
  console.log(y)
}
window.addEventListener('scroll', myScrollFunc)
window.addEventListener('scroll', myScrollFunc)

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('O_SideBarSpec')
  const gridBarHolder = createRoot(grid)
  // prettier-ignore
  gridBarHolder.render(<O_SideBar name="Сетки" barItems={barItems} />)
})
