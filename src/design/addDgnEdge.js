'use strict'

const printChat = require('../helpers/printChat.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.info.concept
  let trgNodeCpt = trgNode.info.concept

  switch (true) {
    case srcNodeCpt === 'net' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'requests')
      break
    case srcNodeCpt === 'thing' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'belongs')
      break
    case srcNodeCpt === 'thing' && trgNodeCpt === 'thing':
      addEdge(cy, srcNodeId, trgNodeId, 'connects')
      break
    case srcNodeCpt === 'thing' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'has')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'imposes')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'thing':
      addEdge(cy, srcNodeId, trgNodeId, 'poses')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'thing':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'information' && trgNodeCpt === 'thing':
      addEdge(cy, srcNodeId, trgNodeId, 'requires')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'thing':
      addEdge(cy, srcNodeId, trgNodeId, 'use')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'knows')
      break
    case srcNodeCpt === 'thing' && trgNodeCpt === 'net':
      addEdge(cy, srcNodeId, trgNodeId, 'belongs')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'asset':
      addEdge(cy, srcNodeId, trgNodeId, 'targets')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'poses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'thing':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'mitigates')
      break
    case srcNodeCpt === 'micronet' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'connects')
      break
    default:
      printChat(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
