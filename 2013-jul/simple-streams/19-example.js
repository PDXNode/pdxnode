var stdout = require('./18-nodejs-to-stream')(process.stdout)
  , louder = require('./17-louder')
  , stdin = require('./16-nodejs-to-stream')(process.stdin)


stdout((louder)(stdin))
