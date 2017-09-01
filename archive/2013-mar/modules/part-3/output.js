var through = require('through')

module.exports = function(el) {
  var stream = through(write)

  return stream

  function write(data) {
    el.innerHTML = data
  }
}
