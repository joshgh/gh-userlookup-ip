var User = require('./../js/lookup.js').userModule;

function displayResponse(response){
  $('#output').append("<p>" + response.name + "</p>");
}

$(document).ready(function(){
  $('#username-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    var currentUser = new User(username);
    console.log(username);
    currentUser.lookup(displayResponse);

  });

});
