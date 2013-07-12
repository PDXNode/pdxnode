function sink(stream) {
  var done

  return consume(), continuable

  function continuable(oncomplete) {
    // this is what gets returned to the outside
    // world.
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
