;(function() {
  'use strict'

  function outy(nodes, types, eventHandler) {
    nodes = Array.isArray(nodes) ? nodes : [nodes]
    types = Array.isArray(types) ? types : [types]

    function handleEvent(e) {
      for (var i = nodes.length; i--; ) {
        if (nodes[i].contains(e.target)) return
      }
      eventHandler(e)
    }

    for (var i = types.length; i--; ) {
      document.addEventListener(types[i], handleEvent)
    }

    return {
      remove: function() {
        for (var i = types.length; i--; ) {
          document.removeEventListener(types[i], handleEvent)
        }
      },
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = outy
  } else {
    window.outy = outy
  }
})()
