// # Using your first module
// For the next exercise (“How’s the weather?”), make sure 
// to use your requestJson module instead of using the 
// regular request module. As you do this, you may notice 
// that your requestJson function stopped working since you
// put it in a separate file. Find out how and fix it :)

// # How’s the weather?
// Go to Forecast.io API and read the documentation. Get 
// yourself a free API key. Remember the Google Geocoding 
// API from yesterday’s workshop. Using both APIs, complete
// the following workflow:
// Ask the user for their location
// Retrieve the weather for the user’s location
// Display the current weather as well as the next 5 days 
// weather in a nice way
// Hint: to display the results in a nice way, a few NPM 
// modules could be useful, including but not limited to:
// colors
// cli-table
// node-emoji
// Add/commit/push

var requestJson = require('./library/request-json.js');
console.log(requestJson);
var prompt = require('prompt');
var userUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var request = require('request');
var key = 'db921cc03f84504f770f583805f219af';
var colors = require('colors');
var emoji = require('node-emoji');
var Table = require('cli-table');
var clc = require('cli-color');


prompt.get('location', function (err, result) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var location = result.location;
        requestJson(userUrl + location, function (err,response) {
            //console.log(response);
            var lat = response.results[0].geometry.location.lat;
            var lon = response.results[0].geometry.location.lng;
            var weatherUrl = 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon;
            requestJson(weatherUrl, function(err,response) {
                console.log(clc.green(emoji.emojify('Ok, here is the current weather forecast for ' + ':heart:' + clc.red(location) + ':heart:')));
                console.log(response.currently);
            //    '\n';
                console.log(clc.green(emoji.emojify('And here is the weather forecast for the next 5 days for ' + ':heart:' + clc.red(location) + ':heart:')));
            //    console.log(response.daily);  // basically this will show the daily forecast for many days
            //    console.log(response.daily.data);
                console.log(response.daily.data.slice(0,5));  // this will show the daily forecast for only 5 days
            });
        });
    }
});


