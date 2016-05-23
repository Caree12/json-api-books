var allBooks = require('../db/books.json');  //THIS IS REQUIRING THE FILE FOR ALL ROUTES USING THE REQUIRE FUNCT AND ASSIGNS THE RETURN VALUE TO A VAR
//THIS COULD BE A MAP OR FOREACH AS THIS IS ALREADY A JS OBJECT THAT WE COULD WORK WITH

module.exports = app.get('/api/:index?', function (req, res){  
	var stuff = req.params.index;

	if (typeof stuff == 'undefined' ) {
		res.send(allBooks);		 
	}else {
		stuff = Number(stuff);

		if ( Number.isNaN(stuff) ) { //this is how we call Nan bc it is a reference
			res.status(404).send('We need a number!');
		}else {	
		    if(stuff > allBooks.length) {
		  		res.send('That number is too big. We only have ' + allBooks.length + ' books.');
		    }else {	
				if(stuff < 1) {
					stuff = 0;
					var thisBook = allBooks[stuff];
					res.send(thisBook);
				}

				stuff --;
				var thisBook = allBooks[stuff];
				res.send(thisBook);
            }
		}
	}
}