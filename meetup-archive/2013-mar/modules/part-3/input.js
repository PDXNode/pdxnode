var through = require('through')
  , ever = require('ever')

module.exports = function(el) {
  var stream = through()
    , ee = ever(el)

  ee.on('keyup', function() {
    stream.write(el.value)
  })

  return stream
} 
