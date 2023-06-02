import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import O_Slider from './components/organisms/O_Slider/O_Slider.jsx'
import SlideOne from './images/color/selection/logo1.png'
import SlideTwo from './images/color/selection/logo2.png'
import SlideThree from './images/color/selection/logo3.png'
import SlideFour from './images/color/selection/logo4.png'
import SlideFive from './images/color/selection/logo5.png'
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
    active: 'true',
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

const imageUrls = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive]

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBar')
  const barHolder = createRoot(sidebar)
  // prettier-ignore
  barHolder.render(<O_SideBar name="Основы цвета" barItems={barItems} />)

  const imageSlider = document.getElementById('imageSlider')
  const root = createRoot(imageSlider)
  root.render(<O_Slider imageUrls={imageUrls} />)
})
