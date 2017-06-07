$(function(){

var container = $('div.container')
console.log(container);
var helloText = $('<strong></strong>');
helloText.text('This page is awesome')
helloText.appendTo(container);

console.log($('div.container h1').text());


var newThing = $('<div id="pooThing"></div>');
newThing.appendTo(container);


}
)