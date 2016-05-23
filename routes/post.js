// THIS HANDLES THE PROCESSING ON THE SERVER SIDE OF THE AJAX POST CALL
// this is the file that actually holds the data
var db = require('../db'); //not the array itself bc it refers to db/index.js here

module.exports = function(req, res){
	var Book = {};
	
	Book = req.body;
	Book.name = Book.name.toUpperCase();

	var bookArray = db.getBooks();  //automatically an array bc of the val of db.getBooks();
		for (i = 0; i < bookArray.length; i++) {	
			var bookName = bookArray[i].name;

		if(Book.name ===  bookName){
			res.status(409).send("We already have that book. Enter another one")//res.write needs a res.send bc you have to explicitly define a point when you send, so here we send); 
																																					//to error handle so the client knows 
			return; //breaks out of the loop and the function completely after we hit the same book
		}		
	}	

	var callback = function() {
		res.send(Book);  //we can just send the req.body as it is already a js object and express knows you prolly want json and converts it for you
		//we call this here so that we can make sure the client and the server are consistent
	}

	db.update(Book);  //call first bc the ref to the module is updated first THEN save so you don't need a parameter in save
	db.save(callback);

	console.log(req.body);
	
}