var fs = require('fs');

var express = require('express');
var	app = express();

var bodyParser = require('body-parser');  
app.use(bodyParser.json());  //this converts json to a js object so you can use it in your code
// app.use(bodyParser.urlencoded({ extended: false }));

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine', 'ejs');

app.use(express.static('public')); //says to take the folder and treat everything in it to be served to the client

app.get('/api/:index?', require('./routes/all') );
	//by adding /api we can now access the list of books from localhost:8888/api/....
app.post('/api', urlencodedParser, require('./routes/post') );

app.get('/', function (req, res) {
	// db.load
	// res.render('index', db.getBooks );

	allBooks = require('./db/books.json');
	res.render('index', allBooks);
});	

app.listen(8888, function () {
	console.log('Listening on port 8888!');
});