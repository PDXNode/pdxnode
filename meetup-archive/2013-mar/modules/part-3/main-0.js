var input = require('./input')
  , output = require('./output')

var textElement = document.createElement('input')
  , outputElement = document.createElement('div')

document.body.appendChild(textElement)
document.body.appendChild(outputElement)

input(textElement)
  .pipe(output(outputElement))

