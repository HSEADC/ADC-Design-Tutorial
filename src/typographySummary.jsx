import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import S_Quiz from './components/superorganisms/S_Quiz/S_Quiz.jsx'
import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

const quizName = 'Тест на знание типографики'

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
    main: 'Правила типографики',
    url: 'rules.html'
  },
  {
    active: 'true',
    main: 'Итог',
    url: 'typography-summary.html'
  }
]

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

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

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

export { sample }

document.addEventListener('DOMContentLoaded', () => {
  const typo = document.getElementById('O_SideBar')
  const typoBarHolder = createRoot(typo)
  // prettier-ignore
  typoBarHolder.render(<O_SideBar name="Типографика" barItems={barItems} />)

  const container10 = document.getElementById('container-10')
  const root5 = createRoot(container10)
  root5.render(<S_Quiz questions={questions} quizName={quizName} />)
})
