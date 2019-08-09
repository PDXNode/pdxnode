# Aug 8 2019

## Meetup Notes
* Presentation in Alchemy Code Lab classroom due to busy groups in the main space. However, most of the students joined us in the classroom. Alchemy helped with water, cups, projector.
* 36 attendees including speaker, mostly students.
* Run by Sam @samrocksc, some input from Faddah and Martin.

## Presenters

### Lightning Talk 1: Cosmo __
* Card Coven project demo
* Description: App for finding Magic card synergies and making decks. Allows filtering by name, price, release date, etc., and returns images and details of all matching cards. Key challenge was querying Mongo for cards having multiple colors and no extra colors (finding: Mongo has an "exclude" query parameter).
* Link: ?

### Lightning Talk 2: Leigh-Ann Crivella, Dirt Deodara, Erin Guerley, ?
* Talk: Chatter-box
* Description: What began as a simple group/direct command line chat app took an artistic turn when the team added interpretive sound using its own compositions and the play-sound library. When a message is received, the app assesses factors like its length and letters to produce an aesthetic string of tones. Users can play back the sounds of messages received over various periods of time. They are looking to add a sentiment package to make generated sounds correspond in tone to message contents.
* Link: https://github.com/team808/chatter-box

### Lightning Talk 3: Martin Berka
* Talk: Node-RED: graphical programming fred-for-all
* Description: Node-RED takes Node.js and turns it into customizable blocks that can be connected into flows. Presentation demonstrates how to quickly create a minimal HTTP and MQTT server, while warning of the risk of growing too far with it. Had problems sharing screen for demo, used chirpers.com.
* Slides: https://github.com/MBerka/presentations/blob/master/node-red/node-red-demo.pdf

### Mike McNeil, @mikermcneil
* Talk: Sails and Parley ?
* Description: "In the era of async/await, the grass has never been greener over here in Node.js-land. But when fostering a stable code base, there are still a few major gotchas you need to watch out for, and some of them are less than obvious." Brief introduction/demo of the Sails MVC framework, leading into how Node has changed. Async-await is ending a time of deeply nested callbacks whose execution sequence was often too complex to fully understand and debug. It has flaws (not yet available outside an async funtion), and there are pitfalls in error handling, like using large try-catch blocks and blaming the wrong thing within the block, or carelessly swallowing all the error messages. Demonstrated how the **Parley library** can be used for error negotiation, tolerance (conditional swallowing), retries (useful for cloud services), timeouts, and interceptions (altering error messages after the message is thrown) - *by integrating with aspects of the chatter-box project*.
* Slides: 
* Link: https://github.com/mikermcneil/parley, sailsjs.com

## Reflections, Improvements to be made
* Need pdxnode stickers. Didn't do Jeopardy due to lack of prizes. No recording due to not having the recording equipment. Organizer availability has been limited.
* Lightning talks were all either student demos or simple how-to. Main talk deepened understanding of asynchronous code, async-await and error handling. Good progress on making the talks beginner-friendly