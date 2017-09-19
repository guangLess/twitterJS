const express = require('express');
const twitterApp = express();
const nunjucks = require( 'nunjucks');

twitterApp.get('/', function(request,response){
    response.send("Hello!");
});


twitterApp.listen(3000, function(){
    console.log("server listening")    
});