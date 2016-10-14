var lookup = require('./../js/lookup.js').lookupModule;

function displayResponse(response){
  $('#output').append("<p>" + response.name + "</p>");
}

$(document).ready(function(){
  $('#username-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    console.log(username);
    lookup(username, displayResponse);

  });

});
