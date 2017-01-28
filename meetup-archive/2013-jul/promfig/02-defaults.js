var path = require('path')
  , promfig = require('promfig')

var props = {
  user: 'Username? '
, password: 'Password? '
}

var defaults = {
  user: 'Gary'
}

// defaults lets you skip entering
// redundant info!
promfig(props, defaults, function(err, config) {
  console.log(err, config)   
})
