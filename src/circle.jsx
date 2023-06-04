import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

import './index.scss'

const barItems = [
  {
    main: 'Основы цвета',
    url: 'circle.html',
    active: 'true',
    subItems: [
      {
        name: 'Использование цветового круга',
        url: 'circle.html#usage'
      },
      {
        name: 'Применение цветового круга',
        url: 'circle.html#action'
      }
    ]
  },
  {
    main: 'Выбор цвета для нового проекта',
    url: 'choice.html',
    active: 'false',
    subItems: [
      {
        name: 'Сервисы для сбора цветовой палитры',
        url: 'choice.html#software'
      },
      {
        name: 'Чем руководствоваться при выборе цвета?',
        url: 'choice.html#how-to-choose'
      }
    ]
  },
  {
    main: 'Замысел через цвет',
    url: 'selection.html',
    active: 'false',
    subItems: [
      {
        name: 'Ассоциации цветов',
        url: 'selection.html#associations'
      },
      {
        name: 'Как это можно использовать?',
        url: 'selection.html#what-to-do'
      },
      {
        name: 'Как это используют в реальности?',
        url: 'selection.html#how-used'
      }
    ]
  },

  {
    main: 'Итог',
    url: 'color-summary.html'
  }
]

const myID = document.getElementById('O_SideBarSpecColor')

const myScrollFunc = function () {
  const y = window.scrollY
  if (y >= 600 || y < 6181) {
    myID.className = 'show'
  }
  if (y <= 600 || y > 6181) {
    myID.className = 'hide'
  }
  console.log(y)
}
window.addEventListener('scroll', myScrollFunc)

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBarSpecColor')
  const barHolder = createRoot(sidebar)
  // prettier-ignore
  barHolder.render(<O_SideBar name="Основы цвета" barItems={barItems} />)
})
