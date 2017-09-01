var through = require('through')
  , brake = require('brake')

var loudify = through(function(data) {
  this.queue(data.toUpperCase())
})

loudify.on('pipe', function(source) {
  if(source.setEncoding) {
    source.setEncoding('utf8')
  }
})

process.stdin
  .pipe(loudify)
  .pipe(process.stdout)

if(process.stdin.paused) {
  process.stdin.resume()
}
