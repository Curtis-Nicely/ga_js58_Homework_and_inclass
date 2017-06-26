
/**
Make a button with the text "Risk It"
When the button is clicked, start a random timer
After the timer has lapsed, display a gigantic kitten on the page
*/

$(function(){
var loading2 = $('#loading-marquee2');
	loading2.hide();

var $kittysection = $('#paste-kitty');

	var $button = $('#riskit').on('click', function(){
	loading2.show();

	var randomNum = parseInt(Math.random() * 2000);
	

	//var randomKittyPic = ["kat.png", "kat2.png", "kat3.png", "kat4.png"];
		
		// function random_kitty(kitty){
  // 		var random = Math.floor(Math.random()* kitty.length);
  // 		return random;
  //   	}
    		
		
	var $kittypics = $('<img src="kat.png"><img/>');

	$kittysection.append($kittypics);	
		

	window.setTimeout($kittysection,randomNum);
	loading2.hide();

	});



});