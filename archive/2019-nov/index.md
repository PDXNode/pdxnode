# Nov 14 2019

## Meetup Notes
* Presentation at Alchemy Code Lab.
* No jeopardy - need the person who has the game, and to replenish the prizes.
* 52 attendees.
* Organized by Faddah @faddah.

## Presenters

* Short presentation by Dirt about Alchemy. Final presentations for the cohort on December 13th, 2pm. All are welcome. Cohort graduates Dec. 18th.

### Presentation 1: Maze-API: Jose Ojeda, Sam McLain-Jesperson, Luke Donahue, Dave Trost, Joe Klause
* **Talk**: Maze-API: A week-long adventure in Node.JS, Express, Mongoose, and recursive algorithms
* **Description**: 5-day project started with blog post: [Maze Generation Algorithm Recap](weblog.jamisbuck.org/2011/2/7/maze-generation-algorithm-recap). The blog provides in-depth visualizations of different maze-solving algorithms, in Ruby. Implemented three algorithms in JavaScript. Each algorithm explores the maze differently, wth different degrees of depth-first vs breadth-first.
  * Recursive backtracker
  * Prim's algorithm
  * Growing Tree Algorithm

* Created a more modular design, with sub-classes for creating *square and hex mazes*. Defined two coordinate systems. Implemented in Mongoose+MongoDB, with middleware for validation, generation and statistics (solution length). Created simple front-end visualizer, demonstrated generation and solution for all three types, including *woven square mazes*. Mazes are saved as JSON, available as a GET API. API key required - free to create with email.
* **Q&A**: Front-end in React.
  * Focused on quality: 100% test coverage in Jest. In the future: triangle mazes?
  * Why were the mazes generated, and why with a hook? Wanted to be able to use e.g. for maze generation, validate, retrieve.
  * Largest maze generated: 80x50. Some path lengths over 50% of the area. Woven mazes tend to stretch this due to cell reuse.

* Presentation link:
* App link: http://maze-api.herokuapp.com
* More information: *Maze Making for Programmers* by Jamis Buck.

### Presentation 2: GraphQL: [Kyle Bjordahl](https://github.com/lucid-kyle)
* **Talk**: What the hell is GraphQL
* **Description**: Started Lucid, company in entertainment, that needed software. Came across GraphQL, often used by people from a front-end background. Avoiding that.
REST: Primary agreement bettween client and server are endpoints. REST is deeply tied to the transport layer. More relationships = more requests.
GraphQL: Primary agreement is the schema. All interection is through one REST endpoint.
Demo: half-hour GraphQL server, dev tools from Apollo. Front-end sends a structure, including relations and multiple independent resources. Also, after multiple REST requests, would need to figure out any relationships between the result sets. GraphQL provides the data with relationships. 
  * Reduces API surface area and risk of inconsistencies.
  * Self-documenting: schema provided to developers, along with any block quotes by the user.

  Server-side code:
  * Resolvers: objects matching each entry in the schema to database queries. Declarative, per-field granularity, handles async.
  * Mutations: heavier duty, for modifying server-side data. Requires validation.
  * Schema: Strongly typed: Scalar/Enum/Oject, non-null and arrays. Custom scalars (break type safety, use sparingly). Union and intrface types (extra complexity). Directives for adding metadata like: indicating deprecated fields.

  Reduced load on mobile applications. One flaw: n+1 problem - possible to requery the same sets of data repeatedly. Avoided with the Data Loader model.

  Tools:
  * Libraries: [Apollo](https://www.apollographql.com) (recommended), also Relay.
  * Explorers: [GraphiQL](https://github.com/graphql/graphiql), GraphQL Playground
  * Databases (for direct querying): [Prisma](https://github.com/graphql/graphiql), PostGraphile. Direct requests to one of these not recommended, but can be convenient to delegate some things to them.
* **Q&A**: Where to use? Great in Node, worse in environment not used to working with JSON objects (requires extra wrapping). See also ReasonML, [OneGraph](https://www.onegraph.com/) (can merge many API calls into one GraphQL query).
  * Need to be thoughtful around the database. Where can we reuse resolvers? Tend to end up moving validation/processing into pure functions.
  * Makes complex APIs discoverable - see OneGraph.
  * Testing: can test every resolver. Error handling: naturally handles errors in individual queries (provides an error key, and partial data). More often, if it will break, will cleanly break the whole query. 

* **Link**: 
[Jok CLI](https://github.com/jokio/jok-cli) by Ezeki Zibzibadze: server scaffolding and client bindings generator. TypeScript-compatible.

## Reflections, Improvements to be made
* Shortage of organizers. Need to get core access for all systems and make sure two people have it to pass along.
* Seeking presentation topics for December, and sponsors.
* High-quality presentations, well-prepared. Need more like this.
* Thanks Faddah!