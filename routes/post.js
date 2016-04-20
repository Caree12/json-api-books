// THIS HANDLES THE PROCESSING ON THE SERVER SIDE OF THE AJAX POST CALL
// THIS IS WHERE I'D DO MY APP.SET TO UPDATE MY LIST OF JSON BOOKS

module.exports = function(req, res){
	var Book = {};
	
	Book = req.body;
	Book.book = Book.book.toUpperCase();

	res.send(Book);  //we can just send the req.body as it is already a js object and express knows you prolly want json and converts it for you
	console.log(req.body);

// 		//here is where I'd append the data that is posted to the server
}