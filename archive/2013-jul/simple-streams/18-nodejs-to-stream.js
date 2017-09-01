module.exports = writable

function writable(to) {
  return function(input) {
    return consume()

    function consume() {
      input.read(function(err, data) {
        if(data === undefined) {
          return
        }
        to.write(data)
        consume()
      })
    }
  }
}
