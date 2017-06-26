
/**
Make a button with the text "Risk It"
When the button is clicked, start a random timer
After the timer has lapsed, display a gigantic kitten on the page
*/

$(function(){
var loading2 = $('#loading-marquee2');
	loading2.hide();



	var $button = $('#riskit').on('click', function(){
	loading2.show();

	
	var randomNum = Math.floor(4*Math.random());

	var randomKittyPic = ["kat.png", "kat2.png", "kat3.png", "kat4.png"];
		

$('#paste-kitty').attr('src',randomKittyPic[randomNum]);
  
console.log(randomNum);
	});

loading2.hide();

});