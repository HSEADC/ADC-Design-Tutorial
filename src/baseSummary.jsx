import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import S_Quiz from './components/superorganisms/S_Quiz/S_Quiz.jsx'
import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

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
    active: 'false',
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
    url: 'base-summary.html',
    active: 'true'
  }
]

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const footer = document.querySelector('footer')

const coords = footer.getBoundingClientRect()

const myIDGrid = document.getElementById('O_SideBar')

var myScrollFunc = function () {
  var y = window.scrollY
  if (y <= 1850) {
    myIDGrid.className = 'show'
  } else {
    myIDGrid.className = 'hide'
  }
  console.log(y)
}

window.addEventListener('scroll', myScrollFunc, console.log(coords))

export { sample }

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBar')
  const root = createRoot(sidebar)
  // prettier-ignore
  root.render(<O_SideBar name="Основы дизайна" barItems={barItems} />)
  const container5 = document.getElementById('container-5')
  const root5 = createRoot(container5)
  root5.render(<S_Quiz questions={questions} />)
})
