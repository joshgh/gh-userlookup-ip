var User = require('./../js/lookup.js').userModule;

function displayUser(response){
  $('#output').append("<p>" + response.name + "</p>");
}

function displayRepos(response){
  response.forEach(function(repo){
    $('#output').append("<p>" + repo.name + "</p>");
  });
}

$(document).ready(function(){
  $('#username-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    var currentUser = new User(username);
    console.log(username);
    currentUser.lookup(displayUser);
    currentUser.getRepos(displayRepos);

  });

});
