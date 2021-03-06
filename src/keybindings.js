'use strict'

const config = require('../config/config.js')
const searchAttribute = require('./core/searchAttribute.js')
const printChat = require('./helpers/printChat.js')
const printChatHTML = require('./helpers/printChatHTML.js')
const core = require('./core/core.js')
const save = require('./helpers/save.js')

module.exports = function console (cy, selectedNode, selectedEdge) {
  // help menu
  const helpMenu = `• focus on console: ⌘L
• delete element: ⌘⌫
• restore node: ⌘Z
• save as: ⇧⌘S
• clear sidebar: clear
• keyword search for attributes`

  // adds the url for the wiki
  const wikiURLButton = `click to view <button id='url-button' class='startButtons' style='background-color:#3b4251; width: 40px; height: 25px;'>wiki</button>`
  const url = 'https://github.com/Or3stis/apparatus/wiki'

  const consoleId = document.getElementById('console-id')
  const labelId = document.getElementById('input-label-id')
  // indicate focus on console
  consoleId.addEventListener('focus', e => {
    labelId.style.color = config.blue
  })
  consoleId.addEventListener('blur', () => {
    labelId.style.color = config.text
  })

  // loses the focus from the console when tapping
  cy.on('tap', 'node', selection => {
    consoleId.blur()
  })
  cy.on('tap', 'edge', selection => {
    consoleId.blur()
  })
  cy.on('tap', selection => {
    consoleId.blur()
  })

  // console commands
  const commands = () => {
    const input = document.getElementById('console-id').value
    document.getElementById('console-id').value = ''
    switch (input) {
      case 'help':
        printChat(helpMenu)
        printChatHTML(wikiURLButton)
        document.getElementById('url-button').addEventListener('click', () => {
          require('electron').shell.openExternal(url)
        })
        break
      case '':
        break
      case 'clear':
        document.getElementById('info-nodes-id').textContent = ''
        break
      default:
        searchAttribute(cy, input)
    }
  }

  // keydown listeners
  document.addEventListener('keydown', event => {
    let key = ''
    if (process.platform === 'darwin') {
      key = event.metaKey
    } else {
      key = event.ctrlKey
    }
    // focus on the consoleId
    if (key === true && event.code === 'KeyL') {
      consoleId.focus()
    }
    // delete elements
    if (key === true && event.code === 'Backspace') {
      core.deleteEl(cy, selectedNode.out, selectedEdge.out)
    }
    if (key === true && event.code === 'KeyZ') {
      // restore elements with meta + z
      core.restoreNode()
    }
    if (event.shiftKey === true && key === true && event.code === 'KeyS') {
      save(cy)
    }
    // listens for the ENTER key when focus is on the console
    if (document.activeElement === consoleId && event.code === 'Enter') {
      commands()
    }
  })
}
