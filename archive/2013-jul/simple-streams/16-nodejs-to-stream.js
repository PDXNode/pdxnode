module.exports = readable

function readable(from) {
  var pending = []

  return {read: read, abort: abort}

  function read(emit) {
    pending[pending.length] = emit 
    check()     
  }

  function check() {
    var output = from.read()
    if(!output) {
      return from.once('readable', check)
    }

    pending.shift()(null, output)
  }

  function abort(done) {
    pending.length = 0
    from.end()
    done()
  }
}

