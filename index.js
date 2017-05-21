!(function(root, factory) {
  if ('function' === typeof define && define.amd)
    define('outy', [], function() {
      return (root.outy = factory())
    })
  else if ('object' === typeof module && module.exports)
    module.exports = factory()
  else root.outy = factory()
})(this, function(nodes, types, eventHandler) {
  'use strict'

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
})
