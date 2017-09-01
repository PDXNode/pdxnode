# Asynchronous Design and Async

Asynchronous design is one of node's major strengths, but presents an intimidating learning curve. Flow control modules like [async] [1] can ease the pain by providing useful utility functions and convenient wrappers to prettify nightmarish callback structures. This talk touches on the benefits of asynchronous design and provides examples of use cases for the async module.

## Speaker: [David Manning] [2]

I'm a developer for [Shift Solutions] [3]. We design and build services that aide the [AEC] [4] industry. We use Node.js because of its flexibility and general applicability to diverse problem sets.

I'm also a math instructor at Portland Community College, where I use node scripts to spam my students.

I encountered async during my quest to escape from the "pyramid of death." Deeply nested callbacks are confusing. Invoking multiple asynchronous calls in parallel sometimes necessitates ad-hoc flow control code that is difficult to maintain. Async separates the flow control layer from your other app logic and gives you lots of utility functions for different sorts of flow patterns.

### Counter indications:

As with almost any pattern, it's possible to get too much of a good thing. One shouldn't use async on _every_ callback pattern. One shouldn't use a sledge hammer to kill a spider. Don't let async make you lazy. Don't use it just to hide asynchronous behavior in a procedural shell. The goal is to make complex patterns readable and manageable. Also consider evented streams as an alternative, if applicable.

## Talk Outline:

####1. [A Contrived Example of a Nested-Callback Problem](./example1.js)
This should be considered an anti-pattern. We read in a directory listing, gets stats on each of the file and then dump the information into a database one item at a time as the `fs.stat()` calls come back. When and where do we close the database? This example uses a _particularly bad_ strategy of calling `setTimeout()` and hoping for the best.

####2. [A Better Way, but Still Awkward](./example2.js)
Here we side-step the problem by batching the database writes and only issuing one call. There's a little bit of ad hoc flow control as we count the `fs.stat()` returns to figure out when we're ready to issue the batch write. Our code is steadily migrating toward the right side of the terminal as out callbacks nest.

####3. [Example 1 Reimplemented with async](./example3.js)
We use the async API method `async.each()` to issue all the `fs.stat()` requests in parallel. Async keeps track of when all the calls have come back and executes a final callback to close the database when we're done (or when one of the calls returns an error).

####4. [The Initial Problem Reexpressed with async](./example4.js)
We reimplement the logic from Example 2 using async. `async.waterfall()` replaces the original nested callback structure, while `async.map()` handles the creation of the batch database write. The final callback catches any errors and closes the database. This provides us with a clean and easily-extensible structure.

[1]: https://github.com/caolan/async

[2]: https://github.com/dlmanning

[3]: http://www.shiftsolutions.co

[4]: http://en.wikipedia.org/wiki/Architecture_Engineering_Construction "Architecture, Engineering and Construction"
