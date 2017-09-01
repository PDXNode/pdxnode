# a five-line autocomplete widget

we can use `through` to write smaller modules!

and we can use it to make our frontend code better!

woo!

### part 1: a quick example

we've defined two modules -- `input.js` and `output.js`.

[`input.js`](./input.js) takes an element and returns a readable `through` stream: whenever a user releases a key
on the keyboard, it emits a data event containing the element's current `value`.

```javascript
var input = require('./input')
  , el = document.createElement('input')

document.body.appendChild(el)

input(el).on('data', function(value) {
  console.log('el\'s value is', value)
})

```

-------

[`output.js`](./output.js) takes an element and returns a writable `through` stream: whenever data is written to it,
the element sets it's `innerHTML` to that data.

> > we use [ever](http://npm.im/ever) in `input.js` to handle turning a DOM element
> > into a more friendly, node-style event emitter.

-------

we wire this together in [`main-0.js`](./main-0.js); we create an input element, an output element, then use our small modules to stream keyboard data from the input to the output content.

> to run the first example, in the modules directory (right above this file), execute
> `npm run example-1`, and open `http://localhost:9966/`. when you're done, just hit `Ctrl-C`.

-------

### part 2: let's make this useful

by defining a few more small modules, we can take `input` and `output` and make a useful autocomplete.

-------

[`trigger-xhr.js`](./trigger-xhr.js) takes an endpoint string and returns a readable/writable `through` stream.

it uses [`debounce`](http://npm.im/debounce): when this function *stops* being called for 500ms, it'll execute.

when it executes, it opens up an XHR to our API server with `?q=<the last value it received>`. 
when the XHR is done, the stream queues up the response text string.

if there happens to be an outstanding XHR, we just drop the incoming data on the floor without re-emitting or triggering
another XHR.

> I use named function hoisting to give a sense of temporality when writing JS;
> in this case, `write` only happens *after* the current function has executed,
> so I put it after the `return` statement. This is purely a stylistic thing.

-------

[`jsonify.js`](./jsonify.js) creates a function that returns a readable/writable `through` stream: whenever data is
written to it, we re-emit the result of `JSON.parse(<that data>)`. **Note:** streams don't just have to send and receive
buffers and strings -- objects and arrays are perfectly valid too!

-------

[`template.js`](./template.js) creates *yet another* readable/writable stream; this time it accepts arrays of data and renders
them using [`templatinglanguage`](http://npm.im/templatinglanguage). It concats the results and emits them as a single string.

### an aside: the api server.

the API server is a bit more complicated: we're running two servers (out of expedience) -- one that serves up the HTML and 
JS (that's that `require('browservefy')` line!), and one that returns JSON arrays representing "data from [`example`](./example) 
that contains the query string". We return this data with CORS headers since it's on a different port, but otherwise it's just
a vanilla JSON endpoint.

We use [`line-stream`](http://npm.im/line-stream) to turn the example file events into events containing each line separately,
then a `through` stream that acts as a filter by only re-emitting the lines that contain the query. We pipe these lines in
a [`JSONStream.stringify`](http://npm.im/JSONStream) instance that builds a JSON array, piece by piece, and finally into the
response. Whew.

--------

And so we can reduce our autocomplete code [to the following](./main-1.js):

```javascript
// our autocomplete:

input(textElement)
  .pipe(xhr('http://localhost:3001/'))
  .pipe(jsonify())
  .pipe(template('<li><a href="#">{{ item }}</a></li>'))
  .pipe(output(outputElement))
```

Let's run it and see what happens!

> to run this example, in the `modules/` directory, run
> `npm run example-2` and open `http://localhost:9966/`. when you're done, just hit `Ctrl-C`.

#### the weak point of `through`

so, we have a nice, reusable autocomplete, right? we should probably wrap it up as a module and publish it
to npm, like good nodeizens. but we run into a problem:

```javascript

// desired usage:
//
var autocomplete = require('autocomplete')

// we take input from wherever, and emit output 
// to wherever.
input(inputEl)
  .pipe(autocomplete())
  .pipe(outputEl)

// if we wrote this:
function autocomplete(from, url, templateSrc) {
  return xhr(url || 'http://localhost:3001/')
    .pipe(jsonify())
    .pipe(template(templateSrc || '<li><a href="#">{{ item }}</a></li>'))
}

// whenever we typed into the 
// inputEl, each character would appear in 
// the output as it's own `<li>`!
// what gives?!
//
// well, we actually returned "template(templateSrc)" from our function!
// so when `inputEl` calls `write()` on the next item in the chain, it's writing
// to `template` when we want to write to `xhr()`!
//
// okay, let's flip flop 'em, and see if that works:
function autocomplete(from, url, templateSrc) {
  var xhr = xhr(url || 'http://localhost:3001/')

  xhr.pipe(jsonify())
     .pipe(template(templateSrc || '<li><a href="#">{{ item }}</a></li>'))

  return xhr
}

input(inputEl)
  .pipe(autocomplete())
  .pipe(outputEl)

// now whenever we type, eventually we get the responseText from the XHR
// as the output!
```

So, `through` works great for writing modules that represent *a single stream at a time*.
That is to say, if you want to write to and read data from the same object, a `through`-based
API is what you want.

However, if your module is represented a stream whose `write`s goes to one point in an **internal**
pipe chain, and whose `data` events come out of the end of that **internal** pipe chain, you want
to use [duplex](http://npm.im/duplex) to present this stream, *not* through.
