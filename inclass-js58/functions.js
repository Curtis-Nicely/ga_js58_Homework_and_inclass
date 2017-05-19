function foo(){
	console.log("hello");
}

foo();

function bar(name){
	console.log("Hello " + name);
}

bar("Justin");


function sum (a, b){
	console.log( a + b);
}

sum(4, 3);

function yellSomething(something){
	return something.toUpperCase();
}

var chicken = yellSomething("piglet");

console.log(chicken);