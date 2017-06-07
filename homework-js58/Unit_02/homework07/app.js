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
var form = document.getElementById("fizzbuzz-form");

btn.onclick = function(event){
		event.preventDefault();
	var grabForm = document.getElementById("fizzbuzz-form");	
	var ulElem = grabForm.lastChild;

while (ulElem.hasChildNodes){
	console.log(ulElem);
grabForm.removeChild(ulElem);
}


do
var input1 = document.getElementById("the-input").value;
var parsedInput = Number.parseInt(input1, 10);
var fizzbuzzList = document.createElement("ul");

	form.appendChild(fizzbuzzList);
// num = document.createTextNode(parsedInput);

for(var i = 1; i <= parsedInput; i ++){
	if(i % 3 == 0 && i % 5 == 0){
		var fList = document.createElement("li");
		fizzbuzzList.appendChild(fList);
		var fizzbuzz = document.createTextNode("FIZZBUZZ");
		fList.appendChild(fizzbuzz);

	}else if(i % 3 == 0 ){
		var fList = document.createElement("li");
		fizzbuzzList.appendChild(fList);
		var fizz = document.createTextNode("fizz");
		fList.appendChild(fizz);

	}else if(i % 5 == 0){
		var fList = document.createElement("li");
		fizzbuzzList.appendChild(fList);
		var buzz = document.createTextNode("buzz");
		fList.appendChild(buzz);
	}else{
		var fList = document.createElement("li");
		fizzbuzzList.appendChild(fList);
		var num = document.createTextNode(i);
		fList.appendChild(num);
	}
}

}


		

	}

