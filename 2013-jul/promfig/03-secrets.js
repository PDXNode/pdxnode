var path = require('path')
  , promfig = require('promfig')

// '@secret' will mask input for that field.
var props = {
  user: 'Username? '
, password: 'Password? '
, '@secret': ['password']
}

var defaults = {
}

promfig(props, defaults, function(err, config) {
  console.log(err, config)   
})

