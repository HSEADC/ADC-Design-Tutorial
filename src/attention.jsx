import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import MOD_SizeBalance from './components/modules/MOD_SizeBalance.jsx'
import MOD_Rangefinder from './components/modules/MOD_Rangefinder.jsx'
import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

const barItems = [
  {
    main: 'Построение композиции',
    url: 'composition.html',
    active: 'false',
    subItems: [
      {
        name: 'Что такое композиция?',
        url: 'composition.html#defenition'
      },
      {
        name: 'Якорные точки',
        url: 'composition.html#ancor-text'
      },
      {
        name: 'Другие способы',
        url: 'composition.html#others'
      }
    ]
  },
  {
    main: 'Балансировка композиции',
    url: 'balance.html',
    active: 'false',
    subItems: [
      {
        name: 'Балансировка по весу',
        url: 'balance.html#weight'
      },
      {
        name: 'Ритм',
        url: 'balance.html#ritm'
      },
      {
        name: 'Правило близости',
        url: 'balance.html#close-rule'
      }
    ]
  },
  {
    main: 'Работа с контрастами',
    url: 'contrast.html',
    active: 'false',
    subItems: [
      {
        name: 'Зачем нужны контрасты?',
        url: 'contrast.html#need-contrast'
      },
      {
        name: 'Виды контрастов',
        url: 'contrast.html#kontrast-types'
      }
    ]
  },
  {
    main: 'Управление вниманием',
    url: 'attention.html',
    active: 'true',
    subItems: [
      {
        name: 'Паттерны чтения',
        url: 'attention.html#patterns'
      },
      {
        name: 'Z-паттерн',
        url: 'attention.html#z'
      },
      {
        name: 'F-паттерн',
        url: 'attention.html#f'
      },
      {
        name: 'Диаграмма Гутенберга',
        url: 'attention.html#gutenberg'
      }
    ]
  },
  {
    main: 'Итог',
    url: 'base-summary.html'
  }
]

const footer = document.querySelector('footer')

const coords = footer.getBoundingClientRect()

const myIDGrid = document.getElementById('O_SideBar')

var myScrollFunc = function () {
  var y = window.scrollY
  if (y <= 2800) {
    myIDGrid.className = 'show'
  } else {
    myIDGrid.className = 'hide'
  }
  console.log(y)
}

console.log(window.scrollY)

window.addEventListener('scroll', myScrollFunc, console.log(coords.top))

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBar')
  const barHolder = createRoot(sidebar)
  // prettier-ignore
  barHolder.render(<O_SideBar name="Основы дизайна" barItems={barItems} />)
})
