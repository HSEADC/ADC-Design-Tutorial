import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

import S_Quiz from './components/superorganisms/S_Quiz/S_Quiz.jsx'

const questions = [
  {
    name: 'Что такое антиква?',
    type: 'Single',
    answerOptions: [
      { body: 'Шрифт с засечкой', status: 'correct', defenition: 'Именно!!' },
      {
        body: 'Шрифт без засечек',
        status: 'incorrect',
        defenition: 'Нет! Шрифт без засечек называется гротеск'
      },
      {
        body: 'Так называют рукописные шрифты',
        status: 'incorrect',
        defenition:
          'Нет! Рукописные шрифты не имеют какого-то дополнительного названия. Просто рукописные!'
      },
      {
        body: 'Шрифты, которые придумали и использовали в античные времена',
        status: 'incorrect',
        defenition:
          'Вот вы и попались! Хоть слова антиква и античность созвучны, ничего общего между ними нет'
      }
    ]
  },
  {
    name: 'Что такое рубленный шрифт?',
    type: 'Single',
    answerOptions: [
      {
        body: 'Так иногда называют антикву — шрифты с засечками',
        status: 'incorrect',
        defenition:
          'Не-а! Антиква — это антиква. А рубленными иногда называют гротески'
      },
      {
        body: 'Это шрифт, в котором все знаки имеют одинаковую ширину',
        status: 'incorrect',
        defenition: 'Нет! Такие знаки называются моноширинными'
      },
      {
        body: 'Так иногда называют гротески — шрифты без засечек',
        status: 'correct',
        defenition: 'Совершенно верно!'
      },
      {
        body: 'Это всё выдумка! Рубленных шрифтов не существует!',
        status: 'incorrect',
        defenition:
          'А вот и нет! Понятие «Рубленные шрифты» действительно существует. Так иногда называют гротески — шрифты в которых отсутствуют засечки'
      }
    ]
  },
  {
    name:
      'Ниже приведены разные виды шрифтов. Однако, не все из них реально существуют. Выберите те виды, которые не выдуманны',
    type: 'Multiple',
    answerOptions: [
      {
        body: 'Антиква',
        status: 'correct',
        defenition: 'Так называют шрифты с засечками'
      },
      {
        body: 'Italic',
        status: 'incorrect',
        defenition:
          'А вот и уловка! Да, понятие italic действительно встречается в типографике. Вот только это не отдельный вид шрифта, а лишь одно из начертаний '
      },
      {
        body: 'Фрактура',
        status: 'correct',
        defenition:
          'Так называют позднюю разновидность готического письма. Понятие фрактура используется для шрифтов, которые стилизованы под эту разновидность письма'
      },
      {
        body: 'Гротеск',
        status: 'correct',
        defenition: 'Гротески — шрифты в которых отсутствуют засечки'
      },
      {
        body: 'Романика',
        status: 'incorrect',
        defenition:
          'Романика — название стиля в искусстве доготических времён, но никак не разновидности шрифта '
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
  if (y <= 1500) {
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
