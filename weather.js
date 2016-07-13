var requestJson = require('./library/request-json.js');
var prompt = require("prompt");

var key = 'db921cc03f84504f770f583805f219af';

prompt.get('location', function(err, res){
    // console.log(res, "THE PROMPT LOG"); //See what it is!
    var location = res.location;
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location;
    requestJson(url, function(err, res) {
        // console.log(res, "FIRST REQUEST LOG");
        var body = res;
        var lat1 = res.results[0].geometry.location.lat;
        var lng1 = res.results[0].geometry.location.lng;
        
        
        var weatherUrl = 'https://api.forecast.io/forecast/'+key+'/'+lat1+','+lng1;
        requestJson(weatherUrl, function(err, res) {
            console.log(res.currently, "SECOND REQUEST LOG");
            var body = res;
            console.log(res.daily);
            
        })
    })
    
})