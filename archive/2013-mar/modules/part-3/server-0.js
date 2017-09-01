var http = require('http')
  , through = require('through')
  , url = require('url')
  , fs = require('fs')
  , ls = require('line-stream')
  , json = require('JSONStream')
  , browservefy = require('browservefy')
  , path = require('path')
  , example = path.join(__dirname, 'example')

http.createServer(function(req, resp) {
  var parsed = url.parse(req.url, true)
    , query = parsed.query

  if(parsed.pathname !== '/') {
    return resp.end('nope')
  }

  resp.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  , 'Access-Control-Allow-Methods': 'GET'
  , 'content-type': 'application/json'
  })

  fs.createReadStream(example)
    .pipe(ls())
    .pipe(through(function(line) {
      if(line.indexOf(query.q) > -1) {
        this.queue(line) 
      }
    }))
    .pipe(json.stringify())
    .pipe(resp)
}).listen(3001)
