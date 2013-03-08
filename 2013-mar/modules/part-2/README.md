# pausing

prior to streams2 (i.e., in `node < 0.10`); request streams given to an http
server were not paused by default.

> to see the first example, run `node server-0.js` and open `http://localhost:7777/`.
> to see the second example, run `node server-1.js` and open `http://localhost:7777/`.
>
> make sure you've called `npm install` while in the `mar-2013/modules-example` directory!

this causes some hilarious race conditions.

in this example, we're writing a server that renders a form on `GET` requests
(provided by [`test.html`](./test.html)). When a user `POST`s data to the server,
we asynchronously create an `output/<timestamp>` directory to put the request data 
into (using [mkdirp](http://npm.im/mkdirp)).

in [the broken server](./server-0.js), we don't pause the request stream while we're
creating the output directory. As a result, sometimes we miss data as it comes through.

we fix this [in the second server](./server-1.js) by creating an empty `through()` stream,
pausing it, and piping the request to that as soon as we get it.

once we've created the output directory, we pipe our `through()` stream to 
[`fs.createWriteStream`](http://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options)
and call `paused.resume()` to have it start spitting out data events again.

this way, we get all of the data no matter what.

### NB:

as of streams2, requests are paused initially -- so this particular use case should
be fixed. importantly, any streams you write with `through` should be compatible with
the `streams2`, and it still gives you the nice buffering / transforming behavior --
so `through` is still really useful! 
