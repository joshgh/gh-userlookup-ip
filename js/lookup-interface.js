var User = require('./../js/lookup.js').userModule;

function displayName(response){
  $('#gh-name').append(response.name || response.login);
}

function displayRepos(response){
  if (response.length !== 0) {
    response.forEach(function(repo){
      $('#gh-repos').append("<li><strong>" + repo.name + "</strong> - " + (repo.description || "description not available") + "</li>");
    });
  } else {
    $('#gh-repos').append("<li>user has no public repositories</li>");
  }
}

function displayError(response){
  $('#error').append("<p>" + response + "</p>");
}

$(document).ready(function(){
  $('#username-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    var currentUser = new User(username);
    $('#gh-name').text("");
    $('#gh-repos').text("");
    $('#error').text("");
    currentUser.lookup(displayName, displayError);
    currentUser.getRepos(displayRepos, displayError);
  });
});
