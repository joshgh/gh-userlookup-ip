var apiKey = require('./../.env').apiKey;

function User(username){
  this.username = username;
}

User.prototype.lookup = function(cb){
  $.get('https://api.github.com/users/' + this.username + '?access_token=' + apiKey).then(function(response){
    cb(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

User.prototype.getRepos = function(cb){
  $.get('https://api.github.com/users/' + this.username + '/repos?per_page=100&access_token=' + apiKey).then(function(response){
    cb(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.userModule = User;
