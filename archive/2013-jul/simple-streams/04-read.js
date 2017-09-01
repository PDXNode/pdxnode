function simple() {
  return {read: read, abort: abort}

  function read(emit) {
    // this gets called whenever
    // a "sink" is ready for data.
  }

  function abort(err, ready) {
  }
}

