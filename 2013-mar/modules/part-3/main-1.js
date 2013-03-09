var input = require('./input')
  , output = require('./output')
  , template = require('./template')
  , jsonify = require('./jsonify')
  , xhr = require('./trigger-xhr')

var textElement = document.createElement('input')
  , outputElement = document.createElement('ul')

document.body.appendChild(textElement)
document.body.appendChild(outputElement)

input(textElement)
  .pipe(xhr('http://localhost:3001/'))
  .pipe(jsonify())
  .pipe(template('<li><a href="#">{{ item }}</a></li>'))
  .pipe(output(outputElement))

