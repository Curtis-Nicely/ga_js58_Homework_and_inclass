
/**
Make a button with the text "Risk It"
When the button is clicked, start a random timer
After the timer has lapsed, display a gigantic kitten on the page
*/


$(function(){

var $kittyMaker = $('#kitty-button');
var $kittyURL = $('<a href="http://placekitten.com/200/300"></a>');


$($kittyMaker).on('click', function(){
var $kittyFrame = $('#kittyspace').append( $kittyURL );

$kittyFrame.hide("slow", function(){
	this.parseInt(Math.random() * 1000);
});
});









//end of file
});