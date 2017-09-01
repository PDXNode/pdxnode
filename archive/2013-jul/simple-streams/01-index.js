// what is a simple stream?
// a simple stream is an object that provides:

function simple() {
  return {read: read, abort: abort}

  function read(emit) {

    // there was an error!
    emit(err)

    // there was some data!
    emit(null, data)

    // we're all done here, thanks!
    emit()
  }

  function abort(err, ready) {
    // clean things up
    // then call ready
    // when we're done  
    ready()
  }
}
