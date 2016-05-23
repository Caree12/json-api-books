var express = require('express');
var	app = express();

var bodyParser = require('body-parser');  
app.use(bodyParser.json());  //this converts json to a js object so you can use it in your code
// app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/all2');//got rid of line 17 in app.js and added it to all2.js

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var db = require('./db');  //this imports our index.js for use here, don't need the additional /index.js BC it is an index file

db.load();  //this is to load and have the data so we do it first thing

app.set('view engine', 'ejs');

app.use(express.static('public')); //says to take the folder and treat everything in it to be served to the client

app.post('/api', urlencodedParser, require('./routes/post') ); 
//this sets up our handler on this specific route to receive a post BUT this is not a post itself

app.get('/', function (req, res) {
	var allBooks = {};
	allBooks.allBooks = db.getBooks(); //property on this obj bc in the ejs file it needs to match 
	res.render('index', allBooks);  //2nd parameter is ALWAYS an obj in res.render
});	

app.listen(8888, function () {
	console.log('Listening on port 8888!');
});