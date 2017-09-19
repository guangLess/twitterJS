const express = require('express');
const twitterApp = express();
const nunjucks = require( 'nunjucks');

twitterApp.get('/', function(request, response){
    response.send('Hello!');
});


twitterApp.listen(3000, function(){
    console.log('server listening')
});

var locals = {
	title: 'An Example',
	people: [
		{name: 'Gandalf'},
		{name: 'Frodo'},
		{name: 'Hermione'}
	]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, res){
	//console.log(locals);
	console.log(res);
});
