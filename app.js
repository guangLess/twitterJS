const express = require('express');
const twitterApp = express();
const nunjucks = require( 'nunjucks');

// twitterApp.get('/', function(request, response){
//     response.send('Hello!');
//     // next();  <- not right order, will send error request (add next as arg later)
// });

twitterApp.listen(3000, function(){
    console.log('server listening')
});
// ---- data ----
var locals = {
	title: 'An Example',
	people: [
		{name: 'Gandalf'},
		{name: 'Frodo'},
		{name: 'Hermione'}
	]
};

var newLocals = {
	sillyTitle: 'ack',
	term: [
		{name: 'hif'},
		{name: 'dfo'},
		{name: 'Hee'}
	]
};

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

twitterApp.engine('html', nunjucks.render);


 //needs a function .render to render html so look for "html"
twitterApp.set('view engine', 'html'); //normally, view engine is default undefined in the api docs, so we set it to 
//html so that it doesnt have to be changed every time in each file?

nunjucks.configure('views', {noCache: true});
// nunjucks.configure('views'); 

twitterApp.get('/', function(request, response){
    // use render
    //response.render('index', {locals, newLocals});

    // use send 
    response.render('index',  {locals, newLocals}, function(err, html){
        response.send(html);
    })

	 //can only 
});

