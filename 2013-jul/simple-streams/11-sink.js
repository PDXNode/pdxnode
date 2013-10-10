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

      // otherwise, keep on nomming.
      consume()
    })
  } 
}
