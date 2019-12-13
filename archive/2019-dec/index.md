# Dec 12 2019

## Meetup Notes
* Presentation at Alchemy Code Lab, in the classroom (coincided with last night before final presentations, to which everyone was invited).
* On a related note, attendance was reduced, around 25.
* Brought back Node jeopardy with store passes.
* Led by Faddah @faddah, with help from Alchemy staff/students, support from @MBerka.

## Presenters

### Presentation 1: [Danny Hogan](https://github.com/dannyhogan)
* **Talk**: Lightning talk about a graphical game using Socket.io
* **Description**: Showcased several graphical games produced using socket.io, with live demos and reviews of the underlying code. Both are implemented with the HTML5 canvas and use SocketIO subscriptions to communicate events (points, win/loss, etc.) from player to server and server to player(s).

The first was a multiplayer coin-collecting race, with the server needing to verify that a given collected coin really existed before crediting its points to the player. The second was a space shooter with real-time chat, more complex graphics, directions of travel and events (shots fired).

* Repository: [pvp-battle](https://github.com/dannyhogan/pvp-battle)
* App link: https://space-battle-io.herokuapp.com/

### Presentation 2: Node.js on (Raspberry) Pi: A Crash Course: [Martn Berk](https://github.com/mberka)
* **Talk**: Node.js on (Raspberry) Pi: A Crash Course
* **Description**: A quick introduction to the hardware of a Raspberry Pi, followed by a maximally simplified procedure for getting a minimal headless Pi running Node.js without keyboard or monitor. Highlighted the [Comitup library](https://github.com/davesteele/comitup) for easy WiFi connection via captive portal.

Provided sample applications and minimal code demos for playing sound from the audio jack (mpg123 utility), sending/receiving data via a USB port (serialport module), binary input/output via GPIO pins (onoff), and communication with sensors via the 1-wire protocol (device-specific modules). Considered caveats around containerization (access to hardware), ARM architecture (software compatibility) and security (need to protect local networks).

* **Presentation link**: [NodeJS_on_Pi.pdf](https://github.com/MBerka/presentations/blob/master/node-on-pi/NodeJS_on_Pi.pdf)

### Group activity: peer programming / discussion: share your questions with the group
* What is LoopBack.js? (modern framework for API/microservices). Is anyone familiar with it?
* Question about OpenVINO and the Nanodegree in Edge AI for IoT.

## Reflections, Improvements to be made
* Positive response to both presentations.
* Interest more non-pizza food; less of a problem if there are leftovers. RSVPs appear decently correlated with presence.
* First group code discussion went fairly; hopefully people will gather more questions knowing what it's like.
* Better situations with upcoming presentations, and Alchemy volunteers are helping substantially. Still need sponsors.
* Considering renewed hacknights in January?
* Thanks Faddah!