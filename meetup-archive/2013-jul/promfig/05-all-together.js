var configurate = require('configurate')
  , promfig = require('promfig')
  , path = require('path')
  , fs = require('fs')

// '@secret' will mask input for that field.
var props = {
  user: 'Username? '
, favorite_repo: 'Favorite NPM Package? '
, password: 'Password? '
, '@secret': ['password']
}

var full_path = path.join(__dirname, 'config', '05-config.js')

if(fs.existsSync(full_path)) {
  return done(null, require(full_path), full_path)
}


configurate({
  configDir:     path.join(__dirname, 'config')
, configFile:    '05-config.js'
, defaultConfig: path.join(__dirname, '05-default.js')
, edit: edit
}, done)

function edit(existing_values, ready) {
  return promfig(props, existing_values, ready)
}

function done(err, config, config_path) {
  console.log(config_path, config)
}

