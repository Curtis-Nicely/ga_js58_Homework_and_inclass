

//MY SOLUTION

for(var i = 0; i < 100; i++){
	console.log(i)
	if(i % 3 ==0){
		console.log("fizz")
	}else if(i % 5 ==0){
		console.log("buzz")
	}else if(i % 3 && 5 == 0){
		console.log("fizzbuzz")
	}
}

//BOBBYTABLE'S SOLUTION

for(var i = 0; i < 100; i++){
	var v = "";
	v += (1 % 3 == 0) ? "Fizz : " ";
	v += (1 % 5 == 0) ? "Fizz : " ";
}