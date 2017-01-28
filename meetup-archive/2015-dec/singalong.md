#singalong.js
The act of performing music can be transcendent. But for many, the dream of performance remains out of grasp. Wouldn't it be cool if we could endow the mobile browser that everyone carries in their pocket with the power to turn non-musicians into genuine performers capable of playing along with a band? Node, plus a host of new HTML5 browser APIs makes it possible.

Singalong.js enables musical collaborations in limitless combinations, in real time, with no perceptible latency. It's licensed under the GPL and uses lots of open libraries to make it happen. Armed with an implementation of pseudo-NTP over socket.io and a database of smart phone sound card latencies, singalong.js seeks to achieve a seemingly unwise task: synchronizing audio events across dozens of unknown mobile browsers over a LAN or the web.

In this talk, I'll chronicle my journey as a musician and amateur coder in stitching together multiple free Node and browser libraries to make a distributed, user-controlled virtual instrument and lyric display system. The talk will include a demonstration wherein the audience "becomes the band" using a combination of cell phones, tablets, and traditional musical instruments.

We'll touch on each of the following technologies:

- socket.io
- socket-ntp-krcmod (my implementation of NTP over socket.io)
- gyro.js
- howler.js
- teoria.js
- hammer.js
- the Fluid (R3) SoundFont

## Speaker Ross Brackett
![Ross](http://i.imgur.com/pWoiTYJ.jpg)

- [The project on github](http://karaokeresearch.github.io/)

Ross lives in Portland. When he's not working on singalong.js, he's writing a sketch or inputting a song into singalong.js for his late night cable access TV show, Karaoke Research Council. During the daylight hours, he works a data processing job that involves a lot of Perl and Excel.
