
/**
Make a button with the text "Risk It"
When the button is clicked, start a random timer
After the timer has lapsed, display a gigantic kitten on the page
*/

$(function(){
var loading2 = $('#loading-marquee2');
	loading2.hide();
var $kittysection = $('#kitty');

var $button = $('#riskit').on('click', function(){
	loading2.show();

var randomNum = parseInt(Math.random() * 2000);


function postkitty(){
var $kittypics = $('<li><a href="http://placekitten.com/200/300"><a/></li>')
$kittysection.append($kittypics);	
		}

window.setTimeout(postkitty,randomNum);
loading2.hide();

	});
});