var through = require('through')
  , brake = require('brake')
  , fs = require('fs')

var loudify = through(function(data) {
  this.queue(data.toUpperCase())
})

loudify.on('pipe', function(source) {
  source.setEncoding('utf8')
})

fs.createReadStream('/usr/share/dict/words')
  .pipe(loudify)
  .pipe(brake(10))
  .pipe(process.stdout)

