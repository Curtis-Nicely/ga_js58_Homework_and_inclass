$(function() {
/** 
1. add a button to the page that when clicked , uses the browsers 
current location for searching 500px and loads the photos.

2. Add an input box for a user to type in a latt and long in the format
of "42.0, 42.0" and uses that to search 500px and display the photos

3. When the photos are being loaded(they have not loaded yet),
display a "loading..." somewhere on the page that disappears when the photos have loaded.

Also!
* Send in a paragraph or so of      what your final project is going ro be via Slack but also via email

*/

  // DOM is now ready
	_500px.init({
	sdk_key: '85fc509a3d4089c5eab8d049ebe553edfb3b898e'
	});
$('#login').click(function(){
	_500px.login();
});

	_500px.on('authorization_obtained', function(){
		console.log("Authorized Successfully");

		$('#login').hide();

		navigator.geolocation.getCurrentPosition(function(pos){
		
			var lat = pos.coords.latitude;
			var long = pos.coords.longitude;

			var searchOptions = {
				geo: lat + ',' + long + ',' + '25mi',
				only: 'landscape',
				image_size: 3,
				rpp: 28,
				sort: 'highest_rating'
			};
			console.log(searchOptions);

			_500px.api('/photos/search', searchOptions, function(resp){
				$('.image-results-view').show();
				var photos = resp.data.photos;
				for(var i = 0;i < photos.length; i++){
					
					//make a new variable called newImg that is
					//assigned to a dynamically made element <img> that has its src attribute assigned to the photos url 
					//for the current loop itereator using the attr method
					var newImg = $('<img>').attr('src', photos[i].image_url).addClass('image');
						console.log(newImg);
					$('.images').append(newImg);
				}

			});
		});
	});

});
