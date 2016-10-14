var apiKey = require('./../.env').apiKey;

function lookup (username, cb){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    cb(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}



exports.lookupModule = lookup;
