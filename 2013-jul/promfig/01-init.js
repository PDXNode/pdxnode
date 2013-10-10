var path = require('path')
  , promfig = require('promfig')

var props = {
  user: 'Username? '
, password: 'Password? '
}

promfig(props, {}, function(err, config) {
  console.log(err, config)   
})
