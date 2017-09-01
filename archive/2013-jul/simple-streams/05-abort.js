function simple() {
  return {read: read, abort: abort}

  function read(emit) {
  }

  function abort(err, ready) {
    // this almost never gets called!
    // this is the sink saying "i would like
    // to prematurely stop reading!"
  }
}

