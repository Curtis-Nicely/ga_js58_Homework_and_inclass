$(function(){

var $kittyMaker = $('#kitty-button');
var kttyURL = "http://placekitten.com/200/300";


$($kittyMaker).on('click', function(){
var kittyFrame = $('#place-kitty');
kittyFrame.append( kittyURL );


});









//end of file
});