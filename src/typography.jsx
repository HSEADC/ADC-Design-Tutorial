import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'

import MOD_GuessTheFont from './components/modules/MOD_GuessTheFont.jsx'
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
    main: 'Основы',
    url: 'base.html',
    active: 'true',
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
    main: 'Итог',
    url: 'typography-summary.html'
  }
]

const bubbles = [
  {
    number: 1,
    font: '',
    transformX: 160,
    transformY: 0,
    rotate: 0,
    innerRotate: 0,
    font: 'Bodoni-Moda'
  },
  {
    number: 2,
    font: '',
    transformX: 314,
    transformY: 0,
    rotate: 0,
    innerRotate: 0,
    font: 'EB-Garamond'
  },
  {
    number: 3,
    font: '',
    transformX: 467,
    transformY: 0,
    rotate: 0,
    innerRotate: 0,
    font: 'Merriweather'
  },
  {
    number: 4,
    font: '',
    transformX: -160,
    transformY: -280,
    rotate: 180,
    innerRotate: -180,
    font: 'Noto-Serif'
  },
  {
    number: 5,
    font: '',
    transformX: -314,
    transformY: -280,
    rotate: 180,
    innerRotate: -180,
    font: 'Old-Standart-TT'
  },
  {
    number: 6,
    font: '',
    transformX: -467,
    transformY: -280,
    rotate: 180,
    innerRotate: -180,
    font: 'PT-Serif'
  },
  {
    number: 7,
    font: '',
    transformX: -140,
    transformY: 20,
    rotate: -90,
    innerRotate: 90,
    font: 'Roboto-Slab'
  },
  {
    number: 8,
    font: '',
    transformX: 140,
    transformY: -606,
    rotate: 90,
    innerRotate: -90,
    font: 'Vollkorn'
  }
]

const fonts = [
  'Bodoni-Moda',
  'EB-Garamond',
  'Merriweather',
  'Noto-Serif',
  'Old-Standart-TT',
  'PT-Serif',
  'Roboto-Slab',
  'Vollkorn'
]

const myID = document.getElementById('O_SideBarSpec')

const myScrollFunc = function () {
  const y = window.scrollY
  if (y >= 600 || y < 8995) {
    myID.className = 'show'
  }
  if (y <= 600 || y > 8995) {
    myID.className = 'hide'
  }
  console.log(y)
}
window.addEventListener('scroll', myScrollFunc)

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export { sample }

document.addEventListener('DOMContentLoaded', () => {
  const typo = document.getElementById('O_SideBarSpec')
  const typoBarHolder = createRoot(typo)
  // prettier-ignore
  typoBarHolder.render(<O_SideBar name="Типографика" barItems={barItems} />)

  const container6 = document.getElementById('container-6')
  const root6 = createRoot(container6)
  root6.render(<MOD_GuessTheFont bubbles={bubbles} fonts={fonts} info={info} />)
})
