const pupa = require('pupa')
const readFile = require('fs').readFileSync
const writeFile = require('fs').writeFileSync

const greenYellow = ( alpha = '' ) => `b5bd68${alpha}`
const lightGray = ( alpha = '' ) => `c5c8c6${alpha}`
const lightBlue = ( alpha = '' ) => `99dbff${alpha}`
const orange = ( alpha = '' ) => `de935f${alpha}`
const teal = '8abeb7'

const base = {
  themeLabel: 'Hybrid Next',
  settings: {
    background: '242e33',
    invisibles: lightGray('26'),
    lineHighlight: lightBlue('0a'),
    selection: lightBlue('26'),
  },
  markdown: {
    quote: greenYellow('88'),
    orderedList: greenYellow('aa'),
    unorderedList: greenYellow('dd'),
  },
  grayBlue: '6c7a80',
  greenYellow: greenYellow(),
  lightBlue: lightBlue(),
  lightGray: lightGray(),
  lightGray2: lightGray('bb'), // String template variables
  orange: orange(),
  orange2: orange('bb'), // Function arguments
  lime: 'a6e22e',
  blue: '81a2be',
  purple: 'b294bb',
  pink: 'f92672', // This is base for `storage` but gets overriden
  red: 'cc6666',
  teal,
  white: 'f8f8f0',
  yellow: 'f0c674',
}

const grayBg = Object.assign(
  {},
  base,
  {
    themeLabel: 'Hybrid Next (Gray Background)',
    settings: Object.assign(
      {},
      base.settings,
      {
        background: '333333',
        invisibles: lightGray('46'),
      }
    ),
    grayBlue: '818181',
  }
)

const build = () => {
  const template = readFile('src/template.tmTheme').toString()

  // Base theme
  writeFile('themes/hybrid-next.tmTheme', pupa(template, base))

  // Gray background theme
  writeFile('themes/hybrid-next-graybg.tmTheme', pupa(template, grayBg))
}

build()
