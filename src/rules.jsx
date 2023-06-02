import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

const barItems = [
  {
    main: 'Основы',
    url: 'base.html',
    active: 'false',
    subItems: [
      {
        name: 'Основные понятия',
        url: 'base.html#termins'
      },
      {
        name: 'Виды шрифтов',
        url: 'base.html#types'
      }
    ]
  },
  {
    main: 'Сочетание шрифтов',
    url: 'harmony.html',
    active: 'false',
    subItems: [
      {
        name: 'Как подобрать шрифтовую пару?',
        url: 'harmony.html#matching'
      },
      {
        name: 'Что нельзя делать при подборе шрифтовых пар?',
        url: 'harmony.html#rectrictions'
      },
      {
        name: 'Где можно найти хорошие шрифтовые пары?',
        url: 'harmony.html#searchPlace'
      }
    ]
  },
  {
    active: 'true',

    main: 'Правила типографики',
    url: 'rules.html'
  },
  {
    main: 'Итог',
    url: 'typography-summary.html'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const typo = document.getElementById('O_SideBar')
  const typoBarHolder = createRoot(typo)
  // prettier-ignore
  typoBarHolder.render(<O_SideBar name="Типографика" barItems={barItems} />)
})
