//THIS IS WHERE MY POST AJAX CALL HAPPENS
//THIS IS SEEN BY THE CLIENT SIDE NOT THE SERVER, AND THE SERVER CAN'T USE THIS
//IF YOU CARE WHERE THE DATA IS ENTERED THEN DO A GET CALL, OR IF YOU DON'T HAVE ACCESS TO THE SERVER TO BEGIN WITH

(function(){
	$('form').submit(function (event) {
		event.preventDefault();

		var newBook = $(this).serialize();

		$.ajax({
	      method: "POST",
	      dataType: "json",
	      url: "/api",
	      data: newBook,
  			// headers: { "Content-Type": "application/json"},

	      success: function(data){
	      	console.log('success!');
					console.log(data);
					newBook = data;

					var name = newBook.book;
					var author = newBook.name;
					var date = newBook.date;

					$('ul').append('<li>' + name + '<br>' + author + '<br>' + date +'</li>');

	      },
	      error: function(req, error, res){ 
      		console.log(data);
	      }	
	    });

	});	


})();