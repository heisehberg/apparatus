'use strict'

const darkWhite = '#ecf0f1'
const white = '#f5f5f5'
const black = '#3a4b54'
const deepBlack = '#2e3f49'
const veryLightGray = '#e0e0e0'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = {
  switchLightTheme: () => {
    document.getElementsByTagName('body')[0].style.background = white
    document.getElementsByTagName('body')[0].style.color = black
    document.getElementsByClassName('graph')[0].style.background = darkWhite
    // document.getElementsByClassName('footer')[0].style.background = darkWhite

    let buttonValues = document.getElementsByClassName('button')
    Object.keys(buttonValues).map((i) => {
      buttonValues[i].style.color = black
    })

    let selectionValues = document.getElementsByClassName('selection')
    Object.keys(selectionValues).map((i) => {
      selectionValues[i].style.color = black
    })
  },

  switchThemeDark: () => {
    document.getElementsByTagName('body')[0].style.background = black
    document.getElementsByTagName('body')[0].style.color = veryLightGray
    document.getElementsByClassName('graph')[0].style.background = deepBlack
    // document.getElementsByClassName('footer')[0].style.background = black

    let buttonValues = document.getElementsByClassName('button')
    Object.keys(buttonValues).map((i) => {
      buttonValues[i].style.color = veryLightGray
    })

    let selectionValues = document.getElementsByClassName('selection')
    Object.keys(selectionValues).map((i) => {
      selectionValues[i].style.color = veryLightGray
    })
  }
}
