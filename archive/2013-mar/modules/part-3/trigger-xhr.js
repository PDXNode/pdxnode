var through = require('through')
  , debounce = require('debounce')

module.exports = function(endpoint, by) {
  var xhr = null
    , write = debounce(execute, by || 500)
    , stream = through(write)

  return stream

  function execute(data) {
    if(xhr) {
      return
    } 

    xhr = new XMLHttpRequest
    xhr.open('GET', endpoint+'?q='+data)
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
        stream.queue(xhr.responseText)
        xhr = null 
      }
    }
    xhr.send(null)
  }
}
