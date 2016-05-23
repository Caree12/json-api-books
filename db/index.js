var fs = require('fs');
//here is where I want my 3 functions for loading, saving and updating our internal js object for persisting data
// THIS IS A SERVER SIDE BC NOT IN OUR PUBLIC FOLDER
//not a route so we don't have req and res here

module.exports = (function () {

	var BookList;

	// LOAD first thing to call on our server to have the data available
	var load = 	function () {
		BookList = require('./books.json');
	}	

	// SAVE  we JUST want this function to save, not do anything else like add data to our object (don't save all posts but save before a server shutdown)
	var save = function (callback) { //callback here is the Book that is posted to the server that we are now saving to our db
		BookListData = JSON.stringify(BookList, null, 4); //null and 4 are parameters, null here is a 'replacer', takes a function and allows you to 
		                                                  //walk through the json obj and modify the data before it gets stringified
		                                                  //4 is the number of spaces

		fs.writeFile('./db/books.json', BookListData, function(err) {//parameters are path, new data, and callback
	    //needs to be very explicit, /db here, bc everything you do with fs (it's different) needs to be from the current working 
	    //directory meaning it's not a relative path but from the current working directory position. leave at db so that the app is run where you want it to be
	    if(err) {
	        return console.log(err);
	    }
	    
	    callback(); //this is to help the asynch of save by sending out only the Book that was created and saved for this save
	    console.log("The file was saved!");
		});
	}

	// UPDATE updates the server info
	var update = function (data) {
		//BookList = require('./books.json');  
		//don't need this here bc we are calling the load in our app.js, to be safe we should call load here as well 
		BookList.push(data);
	}

	// GET pass all the data to the view
	var getBooks = function () {
		return BookList;
	}

	return {load: load, save: save, update: update, getBooks: getBooks}; //exporting an object with 4 functions that IS our './db' bc this obj is the product of this file

})();