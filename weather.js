var requestJson = require('./library/request-json.js');
var prompt = require("prompt");


prompt.get('location', function(err, res){
    console.log(res, "THE PROMPT LOG"); //See what it is!
    var location = res.location;
    var url = 'google' + location;
    requestJson(url, function(err , res) {
        console.log(res, "FIRST REQUEST LOG");
        var body = res;
        var lat = res;
        var lng = res;
        var weatherUrl = 'weather';
        requestJson(weatherUrl, function(err, res) {
            console.log(res, "SECOND REQUEST LOG");
            
            
        })
    })
    
})