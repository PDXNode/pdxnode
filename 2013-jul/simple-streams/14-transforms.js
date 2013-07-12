function transform(stream) {
  // in most cases, we can just return
  // whatever the incoming stream's `abort`
  // is!
  return {read: read, abort: stream.abort}

  function read(emit) {
  }
}
