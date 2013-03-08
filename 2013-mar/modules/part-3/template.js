var through = require('through')
  , template = require('templatinglanguage')

module.exports = function(source) {
  var tpl = template(source)
  return through(write)

  function write(data) {

    var out = []
    for(var i = 0, len = data.length; i < len; ++i) {
      out[out.length] = tpl({item: data[i]})
    }
    this.queue(out.join(''))
  }
}
