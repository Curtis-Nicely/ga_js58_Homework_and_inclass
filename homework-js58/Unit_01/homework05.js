/**
Given an array with these elements in it:

var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
Write a function that returns the largest element in an array.

Write a function that checks whether an element occurs in an array. Make the function return true or false. For example:
function inArray(array, element) { ... }

if(inArray(numberList, 3)) { console.log("It exists!") }
Write a function that returns the elements on odd positions in an array. For the list given above, it would print 5, 20, 90

Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array)

Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.

You can do all of these in 1 javascript file.
s
*/


//FIRST ASSIGNMENT------------------------------------>
var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];


function largeNum(checkArray){
var highestVal = checkArray[0];
for(var i = 0; i < checkArray.length; i++){
	
while(checkArray[i] > highestVal ){
highestVal = checkArray[i];	
}

/**
if(checkArray[i] > highestVal){
	highestVal = checkArray[i];
}*/

}
return highestVal;
}

results = largeNum(numberList);

console.log(results);


//SECOND ASSIGNMENT-------------------------------------->

function inArray(array, item){
	for(var i = 0; i < array.length; i++){
		if(array[i] == item ){
			return true
		}
	}
}

var valid = inArray(numberList, 20);

if(valid == true){
	console.log("Yeppers, it's true");
	
}else{
	console.log("nope, not true");
}

//THIRD ASSIGNMENT-------------------------------------->