module.exports = louder

function louder(from) {
  return {read: read, abort: from.abort}

  function read(emit) {
    from.read(function(err, data) {
      if(data === undefined) {
        return emit(err)
      }
     
      emit(null, new Buffer(data.toString().toUpperCase()))
    })
  }
}
