var fs = require('fs');

var express = require('express');
var	app = express();

// app.get('/', function(request, response) {  
// 	response.sendFile (__dirname + '/db/books.json');
// });

app.get('/', require('./routes/all') );//including .js files by default

app.listen(8888, function () {
	console.log('Listening on port 8888!');
});