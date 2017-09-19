const express = require('express');
const twitterApp = express();

twitterApp.use(function(request, response, next) {
    //response.send('this is middleware');
    var statusCode = response.statusCode;
    response.json(statusCode);
    next();
})

twitterApp.get('/', function(request,response){
    response.send("Hello!");
});
twitterApp.get('/news', function(request,response){
    response.send("news saide Hello!");
});

twitterApp.listen(3000, function(){
    console.log("server listening")    
});