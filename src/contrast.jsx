import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import MOD_ContrastEditor from './components/modules/MOD_ContrastEditor.jsx'
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

const figures = [
  {
    column: 1,
    row: 1,
    cEnd: '',
    rEnd: '',
    number: 1,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 1,
    row: 2,
    cEnd: '',
    rEnd: '',
    number: 2,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 1,
    row: 3,
    cEnd: '',
    rEnd: '',
    number: 3,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 1,
    row: 4,
    cEnd: '',
    rEnd: '',
    number: 4,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 2,
    row: 1,
    cEnd: '',
    rEnd: '',
    number: 5,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 2,
    row: 2,
    cEnd: '',
    rEnd: '',
    number: 6,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 2,
    row: 3,
    cEnd: '',
    rEnd: '',
    number: 7,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 2,
    row: 4,
    cEnd: '',
    rEnd: '',
    number: 8,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 3,
    row: 1,
    cEnd: '',
    rEnd: '',
    number: 9,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 3,
    row: 2,
    cEnd: '',
    rEnd: '',
    number: 10,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 3,
    row: 3,
    cEnd: '',
    rEnd: '',
    number: 11,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 3,
    row: 4,
    cEnd: '',
    rEnd: '',
    number: 12,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 4,
    row: 1,
    cEnd: '',
    rEnd: '',
    number: 13,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 4,
    row: 2,
    cEnd: '',
    rEnd: '',
    number: 14,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 4,
    row: 3,
    cEnd: '',
    rEnd: '',
    number: 15,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  },
  {
    column: 4,
    row: 4,
    cEnd: '',
    rEnd: '',
    number: 16,
    color: '#313131',
    border: '100',
    clip: '1',
    size: 81,
    display: 'inherit'
  }
]

const colors = ['#F6DA4B', '#4E4BF6', '#F64B4B']
const forms = [
  'unset',
  'polygon(50% 31.7%, 50% 31.7%, 75% 75%, 25% 75%)',
  'circle(50% at 50% 50%)'
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
    active: 'true',
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
  if (y <= coords.bottom - 300) {
    myIDGrid.className = 'show'
  } else {
    myIDGrid.className = 'hide'
  }
}

window.addEventListener('scroll', myScrollFunc, console.log(coords))

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export { sample }

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('O_SideBar')
  const root = createRoot(sidebar)
  // prettier-ignore
  root.render(<O_SideBar name="Основы дизайна" barItems={barItems} />)

  const container3 = document.getElementById('container-3')
  const root3 = createRoot(container3)
  // prettier-ignore
  root3.render(<MOD_ContrastEditor info={info} figures={figures} colors={colors}forms={forms}/>)
})
