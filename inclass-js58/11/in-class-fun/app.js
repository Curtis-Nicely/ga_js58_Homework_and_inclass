

$(function(){
//hide marquee
	var loading = $('#loading-marquee');
	loading.hide();
	//obtain html element
	//and attach a click event handler
$('#get-weather').on('click', function(event){
	loading.show();

event.preventDefault();
console.log("work?");


//obtain the values that the user has typed in by 
//getting the element by id and calling val()
var long = $('#longitude').val();
var lati  = $('#longitude').val();

//https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/long,lati
var baseURL = "https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/";
var weatherURL = baseURL + "/" + long + "," + lati
//use the jquery get method to perform an ajax request
$.get(weatherURL, function(response){
	loading.hide();
	var temp = response.currently.temperature;
	var humid = response.currently.humidity;
	var wind = response.currently.windSpeed;
$('#current-temp').html(temp);
$('#current-humidity').html(humid);
$('#current-wind').html(wind);


})

});




});