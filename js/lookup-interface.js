var Lookup = require('./../js/lookup.js').lookupModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#username-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    console.log(username);

  });

});
