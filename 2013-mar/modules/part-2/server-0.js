var mkdirp = require('mkdirp')
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
    , when

  directory = path.join('output', ''+Date.now())
  output = path.join(directory, 'post')

  req.on('end', finished)

  mkdirp(directory, function(err) {
    req.pipe(fs.createWriteStream(output))
  })

  function finished() {
    resp.writeHead(302, {'location': '/'})
    resp.end()
  }
}
