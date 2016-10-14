var apiKey = require('./../.env').apiKey;

function User(username){
  this.username = username;
}

User.prototype.lookup = function(cbSuccess, cbError){
  $.get('https://api.github.com/users/' + this.username + '?access_token=' + apiKey).then(function(response){
    cbSuccess(response);
  }).fail(function(error){
    cbError(error.responseJSON.message);
  });
};

User.prototype.getRepos = function(cbSuccess, cbError){
  $.get('https://api.github.com/users/' + this.username + '/repos?per_page=100&access_token=' + apiKey).then(function(response){
    cbSuccess(response);
  }).fail(function(error){
    cbError(error.responseJSON.message);
  });
};

exports.userModule = User;
