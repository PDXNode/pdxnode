var configurate = require('configurate')
  //, promfig = require('promfig')
  , path = require('path')

configurate({
  configDir:     path.join(__dirname, 'config')
, configFile:    '04-config.js'
, defaultConfig: path.join(__dirname, '04-default.js')
, edit: edit
}, done)

function edit(existing_values, ready) {
  ready(null, existing_values)
}

function done(err, config, config_path) {
  console.log(config, config_path)
}
