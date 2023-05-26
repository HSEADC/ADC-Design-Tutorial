import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import MOD_Rangefinder from './components/modules/MOD_Rangefinder.jsx'

import MOD_CircleGame from './components/modules/MOD_CircleGame.jsx'

import MOD_ContrastEditor from './components/modules/MOD_ContrastEditor.jsx'

import MOD_SizeBalance from './components/modules/MOD_SizeBalance.jsx'

import S_Quiz from './components/superorganisms/S_Quiz/S_Quiz.jsx'

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

const colors = ['#F6DA4B', '#4E4BF6', '#F64B4B']
const forms = [
  'unset',
  'polygon(50% 31.7%, 50% 31.7%, 75% 75%, 25% 75%)',
  'circle(50% at 50% 50%)'
]

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export { sample }

document.addEventListener('DOMContentLoaded', () => {
  // const container1 = document.getElementById('container-1')
  // const root1 = createRoot(container1)
  // root1.render(<MOD_Rangefinder info={info} />)
  //
  // const container2 = document.getElementById('container-2')
  // const root2 = createRoot(container2)
  // root2.render(<MOD_CircleGame info={info} />)
  //
  // const container3 = document.getElementById('container-3')
  // const root3 = createRoot(container3)
  // root3.render(
  //   <MOD_ContrastEditor
  //     info={info}
  //     figures={figures}
  //     colors={colors}
  //     forms={forms}
  //   />
  // )
  //
  // const container4 = document.getElementById('container-4')
  // const root4 = createRoot(container4)
  // root4.render(<MOD_SizeBalance info={info} />)

  const container5 = document.getElementById('container-5')
  const root5 = createRoot(container5)
  root5.render(<S_Quiz questions={questions} />)
})
