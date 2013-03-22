var request = require('request')
  , _       = require('underscore');

eventsUrl = 'https://api.meetup.com/2/events?' +
  'key=8048211411406b471e621e3e602c3e3&sign=true&group_id=6693792&page=20';
exports.index = function(req, res) {
  request(eventsUrl, function (error, response, body) {
    results = JSON.parse(body).results;
    result = _.min(results, function (item) { return item.time; });
    nextEvent = undefined;
    if (result) {
      nextEvent = {
        location: {
          name: result.venue.name,
          address_simple: result.venue.address_1,
          address_full: result.venue.address_1+","+result.venue.zip,
          directions: result.venue.address_2,
          lon: result.venue.lon,
          lat: result.venue.lat
        },
        name: result.name,
        url: result.event_url,
        time: result.time,
        time_formatted: new Date(result.time).toString(),
        description: result.description
      };
    }
    res.render('index', { title: 'PDXnode', nextEvent: nextEvent });
  });

};