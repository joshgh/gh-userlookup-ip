var User = require('./../js/lookup.js').userModule;

function displayName(response){
  $('#gh-name').text("");
  $('#gh-name').append(response.name || response.login);
}

function displayRepos(response){
  $('#gh-repos').text("");
  response.forEach(function(repo){
    $('#gh-repos').append("<li>" + repo.name + " - " + (repo.description || "description not available") + "</li>");
  });
}

$(document).ready(function(){
  $('#username-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    var currentUser = new User(username);
    currentUser.lookup(displayName);
    currentUser.getRepos(displayRepos);
  });
});
