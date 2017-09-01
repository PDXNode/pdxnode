function transform(stream) {
  return {read: read, abort: stream.abort}

  function read(emit) {
    // and we just read/emit as usual!
  }
}
