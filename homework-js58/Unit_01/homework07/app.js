/**
Create an HTML file and Javascript file. In the HTML file include the javascript using the <script> tag that covered in class.

On the page, there should be an input field that accepts numbers and a button that says "Go!".

So take this scenario:

Given I enter in "10" into the input box

When I click "Go!"

Then the fizz buzz algorithm is printed under the box up to "10"
Things to consider:

When retrieving a value from an input element in Javascript, the value will be returned as a string. You'll need to convert the value to the integer type. Google away :)
When someone enters in a new number and presses Go!, then the previous result should be erased and replaced with the new value.
*/

window.onload = function(){

var btn = document.getElementById("input-button");

btn.onclick = function(event){
		event.preventDefault();
var input1 = document.getElementById("the-input").value;
var parse = input1.parseInt(input1, 10);
var num = document.createTextNode(parse);
console.log(num);

		

	

}

function fizzbuzz(number){
	for(var i = 0; i < 10; i++){
		if(i % 3 ==0){
			
		}
	}
}

}