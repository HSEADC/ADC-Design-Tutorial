import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import O_Slider from './components/organisms/O_Slider/O_Slider.jsx'
import SlideOne from './images/color/choice/coloors1.png'
import SlideTwo from './images/color/choice/coloors2.png'

import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

import './index.scss'

const barItems = [
  {
    main: 'Основы цвета',
    url: 'circle.html',
    active: 'false',
    subItems: [
      {
        name: 'Использование цветового круга',
        url: 'composition.html#usage'
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
    active: 'true',
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

const footer = document.querySelector('footer')

const coords = footer.getBoundingClientRect()

const myIDGrid = document.getElementById('O_SideBar')

var myScrollFunc = function () {
  var y = window.scrollY
  if (y <= 3791) {
    myIDGrid.className = 'show'
  } else {
    myIDGrid.className = 'hide'
  }
  console.log(y)
}

window.addEventListener('scroll', myScrollFunc, console.log(coords))

const imageUrls = [SlideOne, SlideTwo]

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBar')
  const barHolder = createRoot(sidebar)
  // prettier-ignore
  barHolder.render(<O_SideBar name="Основы цвета" barItems={barItems} />)

  const imageSlider = document.getElementById('imageSlider')
  const root = createRoot(imageSlider)
  root.render(<O_Slider imageUrls={imageUrls} />)
})
