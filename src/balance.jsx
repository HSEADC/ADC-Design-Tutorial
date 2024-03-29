import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import MOD_SizeBalance from './components/modules/MOD_SizeBalance.jsx'
import MOD_Rangefinder from './components/modules/MOD_Rangefinder.jsx'
import O_SideBar from './components/organisms/O_SideBar/O_SideBar.jsx'

const info = [
  {
    header: `Упражнение на\u00A0поиск промежутка`,
    text: `  Перед вами 5\u00A0кругов, 4\u00A0из\u00A0которых находятся
    на\u00A0одинаковом расстоянии. С\u00A0помощью ползунка расположите пятый
    круг на\u00A0такое же\u00A0расстояние.`
  },

  {
    header: `Упражнение на\u00A0поэтапное уменьшение`,
    text: `  Перед вами пустой холст. Зажмите левую кнопку мыши\u00A0и, удерживая\u00A0её, ведите курсор вниз. На\u00A0холсте появится квадрат, а\u00A0как только вы\u00A0отпустите кнопку\u00A0\u2014 квадрат перестанет расти. Ваша задача\u00A0\u2014 уместить на\u00A0холсте как можно больше квадратов, НО: вы\u00A0не\u00A0можете выходить за\u00A0пределы холста, каждый новый квадрат должен быть меньше предыдущего, квадраты не\u00A0должны задевать друг-друга. Чем больше квадратов вы\u00A0уместите на\u00A0холсте\u00A0\u2014 тем лучше результат!`
  },
  {
    header: `Свободный редактор контрастов`,
    text: `Контрасты бывают разные и\u00A0их\u00A0довольно много (мы\u00A0говорили об\u00A0этом чуть ранее). Перед вами свободный мини-редактор, в\u00A0котором вы\u00A0можете выбирать типы контрастов и\u00A0применять их\u00A0к\u00A0кругам внутри кадра (можно выбрать сразу несколько). В\u00A0этом задании нет правильного ответа. Делайте всё, что захотите!`
  },
  {
    header: `Упражнение на\u00A0балансировку размера `,
    text: `Перед вами находится три квадрата. Размер квадрата посередине можно регулировать ползунком под ним. Ваша задача: отрегулировать его так, чтобы его размер был максимально усреднёным `
  },
  {
    header: `Цветовые ассоциации `,
    text: `Существуют общепринятые ассоциации цветов с характерами. Попробуйте их угадать \u2014 перетащите слова к цветам, которые,
по-вашему, соответствуют собщепринятыми ассоциациями `
  },
  {
    header: `Упражнение на\u00A0узнавание шрифта`,
    text: `Перед вами \u2014 объект, в\u00A0центре которого, находится название одного из\u00A0популярных шрифтов. В\u00A0каждом ответвлении \u2014 набор букв, набранных случайным шрифтом. Ваша задача \u2014 выбрать ответвление, в\u00A0котором буквы набраны тем\u00A0же шрифтом, что и\u00A0по центру `
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
    active: 'true',
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
    url: 'base-summary.html'
  }
]

const footer = document.querySelector('footer')

const coords = footer.getBoundingClientRect()

const myIDGrid = document.getElementById('O_SideBar')

var myScrollFunc = function () {
  var y = window.scrollY
  if (y <= 9360) {
    myIDGrid.className = 'show'
  } else {
    myIDGrid.className = 'hide'
  }
  console.log(y)
}

window.addEventListener('scroll', myScrollFunc, console.log(coords))

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBar')
  const barHolder = createRoot(sidebar)
  // prettier-ignore
  barHolder.render(<O_SideBar name="Основы дизайна" barItems={barItems} />)

  const container1 = document.getElementById('container-1')
  const root1 = createRoot(container1)
  root1.render(<MOD_Rangefinder info={info} />)

  const container4 = document.getElementById('container-4')
  const root4 = createRoot(container4)
  root4.render(<MOD_SizeBalance info={info} />)
})
