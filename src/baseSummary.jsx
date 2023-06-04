import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import S_Quiz from './components/superorganisms/S_Quiz/S_Quiz.jsx'
import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

const questions = [
  {
    name: 'Чего можно достичь благодаря хорошей композиции? ',
    type: 'Multiple',
    answerOptions: [
      {
        body: 'Удобочитаемости контента',
        status: 'correct',
        defenition: 'Верно!'
      },
      {
        body: 'Получить готовые стилевые шаблоны',
        status: 'incorrect',
        defenition:
          'Нет! Для того, чтобы создать стилевые шаблоны, нужно задать их в графическом редакторе'
      },
      {
        body:
          'Сформировать у зрителя хорошее первое впечатление о вашей работе',
        status: 'correct',
        defenition: 'Совершенно верно!'
      },
      {
        body: 'Рубрикацию текстового контента',
        status: 'incorrect',
        defenition:
          'Нет, для этого нужно применять стилевые шаблоны к текстовым блокам'
      }
    ]
  },
  {
    name: 'Какой метод поможет вам построить композицию на старте?',
    type: 'Single',
    answerOptions: [
      {
        body: 'Правило близости',
        status: 'incorrect',
        defenition:
          'Не совсем. Правило близости поможет построить связи между блоками контента, но никак не построить композицию'
      },
      {
        body: 'Якорные точки',
        status: 'correct',
        defenition: 'Совершенно верно!'
      },
      {
        body: 'Выбор цветового сочетания',
        status: 'incorrect',
        defenition:
          'Ну что вы. Конечно нет, сочетания цветов на композицию никак не повлияют'
      },
      {
        body: 'Компонентный подход',
        status: 'incorrect',
        defenition:
          'Нет. Компонентный подход применяется в другой сфере дизайна и никак не связан с построением композиции'
      }
    ]
  },
  {
    name:
      'У нас есть группа объектов, расстояние между ними 20 пикселей. Какое расстояние должно быть до другой такой же группы?',
    type: 'Single',
    answerOptions: [
      {
        body: '20 пикселей',
        status: 'incorrect',
        defenition:
          'Не верно. Такое расстояние создаст не две отдельные группы, а одну целую'
      },
      {
        body: '10 пикселей',
        status: 'incorrect',
        defenition:
          'Нет! Это расстояние меньше, чем расстояние между элементами в группе'
      },
      {
        body: '40 пикселей',
        status: 'correct',
        defenition: 'Правильно!'
      },
      {
        body: '5 пикселей',
        status: 'incorrect',
        defenition:
          'Нет! Это расстояние меньше, чем расстояние между элементами в группе'
      }
    ]
  },
  {
    name: 'В чём ключевое различие Z и F паттернов?',
    type: 'Single',
    answerOptions: [
      {
        body: 'Z паттерна не существует!',
        status: 'incorrect',
        defenition: 'Ещё как существует!'
      },
      {
        body: 'F паттерна не существует!',
        status: 'incorrect',
        defenition: 'Ещё как существует!'
      },
      {
        body:
          'Z паттерн описывает поведение пользователя при чтении небольших блоков, а F паттерн — при чтении больших кусков текста',
        status: 'correct',
        defenition: 'Совершенно верно!'
      },
      {
        body:
          'F паттерн описывает поведение пользователя при чтении небольших блоков, а Z паттерн — при чтении больших кусков текста',
        status: 'incorrect',
        defenition: 'Почти так, только наоборот'
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
  if (y <= 2300) {
    myIDGrid.className = 'show'
  } else {
    myIDGrid.className = 'hide'
  }
  console.log(y)
}

const quizName = 'Тест на знание основ дизайна'

window.addEventListener('scroll', myScrollFunc, console.log(coords))

export { sample }

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBar')
  const root = createRoot(sidebar)
  // prettier-ignore
  root.render(<O_SideBar name="Основы дизайна" barItems={barItems} />)
  const container5 = document.getElementById('container-5')
  const root5 = createRoot(container5)
  root5.render(<S_Quiz name="nt" questions={questions} quizName={quizName} />)
})
