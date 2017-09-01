// it looks almost exactly like
// a normal stream! :D
function transform(stream) {
  return {read: read, abort: stream.abort}

  function read(emit) {
  }
}
