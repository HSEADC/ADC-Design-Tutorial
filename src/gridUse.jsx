import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

const barItems = [
  {
    main: 'Что такое сетка?',
    url: 'base.html',
    active: 'false',
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
    active: 'true',
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
    url: 'grid-summary.html'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const typo = document.getElementById('O_SideBar')
  const typoBarHolder = createRoot(typo)
  // prettier-ignore
  typoBarHolder.render(<O_SideBar name="Типографика" barItems={barItems} />)
})
