import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import MOD_Rangefinder from './components/modules/MOD_Rangefinder.jsx'

import MOD_CircleGame from './components/modules/MOD_CircleGame.jsx'

import MOD_ContrastEditor from './components/modules/MOD_ContrastEditor.jsx'

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

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export { sample }

document.addEventListener('DOMContentLoaded', () => {
  // const container1 = document.getElementById('container1')
  // const root1 = createRoot(container1)
  // root1.render(<MOD_Rangefinder info={info} />)
  //
  const container2 = document.getElementById('container2')
  const root2 = createRoot(container2)
  root2.render(<MOD_CircleGame info={info} />)

  // const container3 = document.getElementById('container3')
  // const root3 = createRoot(container3)
  // root3.render(
  //   <MOD_ContrastEditor
  //     info={info}
  //     figures={figures}
  //     colors={colors}
  //     forms={forms}
  //   />
  // )
})
