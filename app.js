const express = require('express');
const twitterApp = express();

twitterApp.get('/', function(request,response){
    response.send("Hello!");
});


twitterApp.listen(3000, function(){
    console.log("server listening")    
});