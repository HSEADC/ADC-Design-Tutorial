import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

import S_Quiz from './components/superorganisms/S_Quiz/S_Quiz.jsx'

const questions = [
  {
    name:
      'При вёрстке носителей с ограниченной высотой и шириной мы применяем…',
    type: 'Single',
    answerOptions: [
      {
        body: 'Сетку только с колонками',
        status: 'incorrect',
        defenition:
          'Нет. Всё таки мы знаем и конечную высоту носителя, а значит только колонками тут не обойтись '
      },
      {
        body: 'Сетку только с рядами',
        status: 'incorrect',
        defenition: 'Нет!'
      },
      {
        body: 'Сетку с колонками и рядами (модульная сетка)',
        status: 'correct',
        defenition:
          'Именно! Так мы сможем систематизировать расположение контента и по горизонтали, и по вертикали'
      },
      {
        body: 'Мульти-адаптивная сетка',
        status: 'incorrect',
        defenition: 'А такая вообще бывает?'
      }
    ]
  },
  {
    name: 'При вёрстке носителей, ограниченных только по ширине мы применяем…',
    type: 'Single',
    answerOptions: [
      {
        body: 'Сетку только с колонками',
        status: 'incorrect',
        defenition: 'Совершенно верно!'
      },
      {
        body: 'Сетку только с рядами',
        status: 'incorrect',
        defenition: 'Нет!'
      },
      {
        body: 'Сетку с колонками и рядами (модульная сетка)',
        status: 'incorrect',
        defenition:
          'Нет. Модульную сетку не получится построить, если мы не знаем конечной высоты носителя'
      },
      {
        body: 'Двойная сетка',
        status: 'incorrect',
        defenition: 'Опять выдумка автора! И опять на том же месте'
      }
    ]
  },
  {
    name: 'Что в сетке обозначает параметр Gutter?',
    type: 'Single',
    answerOptions: [
      {
        body: 'Внешние отступы',
        status: 'incorrect',
        defenition: 'Не совсем'
      },
      {
        body: 'Внутренние отступы',
        status: 'correct',
        defenition:
          'Совершенно верно! Это отступы между колонками, или между рядами'
      },
      {
        body: 'Размер колонки',
        status: 'incorrect',
        defenition: 'Не совсем'
      },
      {
        body: 'Количество колонок',
        status: 'incorrect',
        defenition: 'Не совсем'
      }
    ]
  },
  {
    name: 'Что в сетке обозначает параметр Margin?',
    type: 'Single',
    answerOptions: [
      {
        body: 'Внешние отступы',
        status: 'correct',
        defenition: 'Совершенно верно. Это отступы от сетки до границ носителя.'
      },
      {
        body: 'Внутренние отступы',
        status: 'incorrect',
        defenition: 'Нет, это Gutter'
      },
      {
        body: 'Размер колонки',
        status: 'incorrect',
        defenition: 'Нет, такой параметр называется Size'
      },
      {
        body: 'Количество колонок',
        status: 'incorrect',
        defenition: 'Не совсем. Это count'
      }
    ]
  },
  {
    name: 'Что в сетке обозначает параметр Margin?',
    type: 'Multiple',
    answerOptions: [
      {
        body: 'Пропорциональные элементы',
        status: 'correct',
        defenition: 'Совершенно верно'
      },
      {
        body: 'Крепко построенная композиция',
        status: 'correct',
        defenition: 'Да, это тоже результат использования сетки'
      },
      {
        body: 'Выровненный контент',
        status: 'correct',
        defenition: 'Да, это действительно так'
      },
      {
        body: 'Экономия времени',
        status: 'correct',
        defenition:
          'Вы даже представить себе не можете, насколько много вы сэкономите!'
      }
    ]
  }
]

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
    active: 'true',
    main: 'Итог',
    url: 'gridSummary.html'
  }
]

const myID = document.getElementById('O_SideBar')

var myScrollFunc = function () {
  var y = window.scrollY
  if (y <= 2200) {
    myID.className = 'show'
  } else {
    myID.className = 'hide'
  }
  console.log(y)
}

window.addEventListener('scroll', myScrollFunc)

document.addEventListener('DOMContentLoaded', () => {
  const typo = document.getElementById('O_SideBar')
  const typoBarHolder = createRoot(typo)
  // prettier-ignore
  typoBarHolder.render(<O_SideBar name="Сетки" barItems={barItems} />)

  const quiz = document.getElementById('S_Quiz')
  const root5 = createRoot(quiz)
  root5.render(<S_Quiz questions={questions} />)
})
