//here is where I want my 3 functions for loading, saving and updating our internal js object for persisting data
// THIS IS A SERVER SIDE BC NOT IN OUR PUBLIC FOLDER
//not a route so we don't have req and res here

module.exports = (function () {

	var allBooks;

	// LOAD first thing to call on our server to have the data available
	var load = 	function () {
		allBooks = require('./books.json');
	}	

	// SAVE
	var save = function () {

	}

	// UPDATE updates the server info
	var update = function () {

	}

	// GET pass all the data to the view
	var getBooks = function () {

	}

	return {load: load, save: save, update: update, getBooks: getBooks}; //exporting an object with 3 functions
}
})();