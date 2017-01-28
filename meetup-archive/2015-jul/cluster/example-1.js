var cluster = require('cluster')
var http = require('http')
var numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; ++i) {
    cluster.fork()
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log(
      'worker %s died with code %s due to signal %s',
      worker.process.pid, code, signal
    )
  })
} else {
  // Under the hood this uses net.createServer()
  http.createServer(function(req, res) {
    res.writeHead(200)
    res.end("hello world\n")
  }).listen(8000)
}