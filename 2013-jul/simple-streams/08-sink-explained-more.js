function sink(stream) {
  var done

  return consume(), continuable

  function continuable(oncomplete) {
    done = oncomplete
  }

  function consume() {
    // this *immediately* starts sucking data
    // down from the stream. it's immediately
    // called!
    stream.read(function(err, data) {
      if(data === undefined) {
        return done && done(err)
      }

      consume()
    })
  } 
}
