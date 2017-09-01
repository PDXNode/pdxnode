function simple() {
  return {read: read, abort: abort}

  function read(emit) {
  }

  function abort(err, ready) {
  }
}

function sink(stream) {
  var done

  return consume(), continuable

  function continuable(oncomplete) {
    done = oncomplete
  }

  function consume() {
    stream.read(function(err, data) {
      if(data === undefined) {
        return done && done(err)
      }

      consume()
    })
  } 
}
