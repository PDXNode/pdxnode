# loud

through makes it easy to write streams that transform input on the 
way through!

in [example 1](./loud.js), we define a `through` stream that transforms
string input into uppercase, and re-emits it!

```javascript

// create a through stream that runs
// a function on writes.
var loudify = through(function(data) {
  // `this.queue` means "emit this data as soon
  // as the next step in the pipe chain is ready for
  // it".
  this.queue(data.toUpperCase())
})

``` 

### NB:

`through` doesn't do anything to incoming data; so if the thing piping
to your stream emits [`Buffer`](http://nodejs.org/api/buffer.html) instances,
you'll get `Buffer` instances as the argument to your function.

Since we're working with a native stream (`process.stdin`), it emits `Buffer`s 
by default. To fix this, we have the following code:

```javascript

loudify.on('pipe', function(source) {
  if(source.setEncoding) {
    source.setEncoding('utf8')
  }
})

```

`Stream` objects emit a `'pipe'` event when they're piped to, with the `source`
stream as the argument. This lets us easily set the desired output type using 
`setEncoding` -- in this case, we say `process.stdin` should emit utf8 encoded strings!

### example 2:

We use [`brake`](http://npm.im/brake) to artifically "slow down" our output -- basically,
brake pauses the input if we get more than N writes per second.

If you were writing your own stream, you'd have to figure out buffering logic -- should I
emit `data` now? Am I paused? Can the next stream in the pipe chain accept this data?

Not so with `through`! Since we're using `this.queue(data)`, our code "just works" with
upstream paused streams.
