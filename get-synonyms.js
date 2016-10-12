// Creating the program:
// Create a file get-synonyms.js at the root of your project
// Import your module and create an instance using your API
// key
// Prompt the user for a word
// Using your API, retrieve the synonyms/antonyms/etc. for 
// the input word
// If everything goes well, display all the results to the 
// user in a nice way
// Hint: to display the results in a nice way, a few NPM 
// modules could be useful, including but not limited to:
// colors
// cli-table
// node-emoji

var SynonymAPI = require('./library/synonyms.js');
var prompt = require('prompt');
var request = require('request');
var key = '589a88f5a9aa30927421a8c291f8b28c';

prompt.get('word', function (err, result) {
    if (err) {
        console.log('there is an error');
    }
    else {
        var word = result.word;
        var url = 'http://words.bighugelabs.com/api/2' + '/' + this.key + '/' + word + '/json';
        request(url + word, function(error, response) {
            var searchSynonym = new SynonymAPI(key);
            searchSynonym.getSynonyms(word, function(err, response){ // the getSynonyms function has 2 parameters which are 'word' and 'callback function'. The 'callback function' normally has 'error' and 'response'. That is why we use 'error' and 'response' here as parameter. 
                if (err) {
                    console.log('there is an error');
                }
                else {
                    console.log(response);
                }
            });
        })
    }
})
