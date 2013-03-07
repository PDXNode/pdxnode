# Modules you should know: `through`

Node's [streaming APIs](http://maxogden.com/node-streams) are very powerful abstractions that make it
easy to write evented I/O without resorting to nested callbacks. They're also handy for writing reusable
APIs that stream objects around!

It can [be confusing](https://github.com/dominictarr/stream-spec) to write spec-compliant streams; but
[`through`](http://npm.im/through) can help! You can use it to make writing pausable, backpressure-capable
streams super fun and easy.

This talk will go through (hurr hurr) a couple examples of where `through` comes in handy; show how to use
it to build a simple streaming API; and touch briefly on some of its shortcomings (where you might want to
use a different module.)

## Speaker: Chris Dickinson

[![profile pic](https://secure.gravatar.com/avatar/f70956bdb907c2f8b39ff624ea925ccd?s=100)](https://twitter.com/isntitvacant)

I'm a JavaScript engineer at [Urban Airship](http://urbanairship.com/) in love with streaming APIs. We use
Node concepts on the frontend (see [domnode](https://github.com/maxogden/domnode)); as well as to run our
JS test driver, [drive.js](http://github.com/urbanairship/drive.js).

Some of my streaming APIs:

* [`json-parse-stream`](http://npm.im/json-parse-stream); for streaming decoding of JSON strings
* [`tar-parse`](http://npm.im/tar-parse); a streaming tar parser (that works in browser!)
* [`chunky-rice`](http://npm.im/chunky-rice); a craig thompson-themed streaming PNG chunk parser. 
