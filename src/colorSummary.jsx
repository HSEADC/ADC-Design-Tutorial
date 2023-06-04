import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'
import S_Quiz from './components/superorganisms/S_Quiz/S_Quiz.jsx'

const quizName = 'Тест на знание основ цвета'

const questions = [
  {
    name: 'Сколько групп цветов выделяют в цветовом круге Иттена?',
    type: 'Single',
    answerOptions: [
      {
        body: '2',
        status: 'incorrect',
        defenition:
          'Нет, их 3. Первичная: синий, жёлтый и красный. Вторчиная: зелёный, оранжевый и фиолетовый. Третичная: все остальные цвета и оттенки'
      },
      {
        body: '3',
        status: 'correct',
        defenition: 'Правильно! '
      },
      {
        body: '10',
        status: 'incorrect',
        defenition:
          'Как-то многовато. На самом деле, их 3. Первичная: синий, жёлтый и красный. Вторчиная: зелёный, оранжевый и фиолетовый. Третичная: все остальные цвета и оттенки'
      },
      {
        body: '7',
        status: 'incorrect',
        defenition:
          'Это число взято с потолка. На самом деле, их 3. Первичная: синий, жёлтый и красный. Вторчиная: зелёный, оранжевый и фиолетовый. Третичная: все остальные цвета и оттенки'
      }
    ]
  },
  {
    name:
      'Как называется цветовая схема, в которой берутся цвета, которые расположены в противоположных друг другу направлениях на цветовом круге?',
    type: 'Single',
    answerOptions: [
      {
        body: 'Комплементарная',
        status: 'correct',
        defenition: 'Так точно!'
      },
      {
        body: 'Триада',
        status: 'incorrect',
        defenition:
          'Нет! Триада — это когда берутся три цвета на углах равностороннего треугольника, наложенного на цветовой круг'
      },
      {
        body: 'Аналогово-комплементарная',
        status: 'incorrect',
        defenition: 'Не верно'
      },
      {
        body: 'Аналоговая',
        status: 'incorrect',
        defenition:
          'А вот и нет! В аналоговой цветовой схеме берут три цвета, которые находятся рядом друг с другом'
      }
    ]
  },
  {
    name:
      'Итак, у нас есть новый проект и нам нужно подумать о выборе цветов. Что будем делать?',
    type: 'Multiple',
    answerOptions: [
      {
        body: 'Можно воспользоваться сервисом по подбору цветовой палитры.',
        status: 'correct',
        defenition:
          'Можно поступить и так. Но лучше использовать такое решение в качестве крайней меры'
      },
      {
        body: 'Можно взять палитру из чужого проекта, который мне понравился',
        status: 'incorrect',
        defenition: 'Воровать в нехорошо (вдохновляться — можно)!'
      },
      {
        body: 'Можно начать с общепринятых цветовых ассоциаций',
        status: 'correct',
        defenition: 'Хорошее решение, а главное — результат будет обоснован!'
      },
      {
        body:
          'Можно отложить выбор цветов на потом, а до этого работать без цвета',
        status: 'correct',
        defenition: 'Тоже вариант. Лучше так, чем сидеть в творческом ступоре'
      }
    ]
  },
  {
    name: 'Что символизирует синий цвет в логотипе компании Phizer?',
    type: 'Single',
    answerOptions: [
      {
        body: 'Профессионализм',
        status: 'incorrect',
        defenition: 'Звучит логично, но это не так'
      },
      {
        body: 'Чистоту',
        status: 'correct',
        defenition: 'Именно!'
      },
      {
        body: 'Технологичность',
        status: 'incorrect',
        defenition: 'Было бы логично, но здесь заложен другой смысл'
      },
      {
        body: 'Качество',
        status: 'incorrect',
        defenition: 'Могло бы быть так, но нет'
      }
    ]
  }
]

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
    url: 'color-summary.html',
    active: 'true'
  }
]

const footer = document.querySelector('footer')

const coords = footer.getBoundingClientRect()

const myIDGrid = document.getElementById('O_SideBar')

var myScrollFunc = function () {
  var y = window.scrollY
  if (y <= 2200) {
    myIDGrid.className = 'show'
  } else {
    myIDGrid.className = 'hide'
  }
  console.log(y)
}

window.addEventListener('scroll', myScrollFunc, console.log(coords))

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export { sample }

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBar')
  const barHolder = createRoot(sidebar)
  // prettier-ignore
  barHolder.render(<O_SideBar name="Основы цвета" barItems={barItems} />)

  const container5 = document.getElementById('container-5')
  const root5 = createRoot(container5)
  root5.render(<S_Quiz quizName={quizName} questions={questions} />)
})
