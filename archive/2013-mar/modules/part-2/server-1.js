var mkdirp = require('mkdirp')
  , through = require('through')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')

http.createServer(function(req, resp) {
  (req.method === 'POST' ? post : get)(req, resp)
}).listen(7777)

function get(req, resp) {
  resp.writeHead(200, {'content-type': 'text/html'})
  fs.createReadStream('test.html')
    .pipe(resp)
}

function post(req, resp) {
  var output
    , paused
    , when

  directory = path.join('output', ''+Date.now())
  output = path.join(directory, 'post')

  paused = through()
  paused.pause()

  req.pipe(paused)

  mkdirp(directory, function(err) {
    paused
      .pipe(fs.createWriteStream(output))
      .on('close', finished)

    paused.resume()
  })

  function finished() {
    resp.writeHead(302, {'location': '/'})
    resp.end()
  }
}
