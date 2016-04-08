var fs = require('fs');

var express = require('express');
var	app = express();

app.set('view engine', 'ejs');

app.get('/api/:index?', require('./routes/all') );
	//by adding /api we can now access the list of books from localhost:8888/api/....

app.get('/', function (req, res) {
	allBooks = require('./db/books.json');
	res.render('index', allBooks );

});	

app.listen(8888, function () {
	console.log('Listening on port 8888!');
});