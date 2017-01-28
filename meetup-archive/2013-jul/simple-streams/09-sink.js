function sink(stream) {
  var done

  return consume(), continuable

  function continuable(oncomplete) {
    done = oncomplete
  }

  function consume() {
    // think of sinks as a "vacuum" -- data
    // *wants* to flow into them from higher up.
    stream.read(function(err, data) {
      if(data === undefined) {
        return done && done(err)
      }

      consume()
    })
  } 
}
