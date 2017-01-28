function sink(stream) {
  var done

  return consume(), continuable

  function continuable(oncomplete) {
    done = oncomplete
  }

  function consume() {
    stream.read(function(err, data) {
      // if the stream is done -- whether there's
      // an error or not! -- call `done` if it's
      // available.
      if(data === undefined) {
        return done && done(err)
      }

      consume()
    })
  } 
}
