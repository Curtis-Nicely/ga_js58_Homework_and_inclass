

/**var fibarray = [1, 2];

function fibnum(num1, num2){
	var sum = num1 + num2;
	return sum
}

fibnum(fibarray[fibarray.length[]], fibarray[1]);

console.log(sum);
*/





var sequence = [1,2];
var nextNumber;
var i = 1;

do {
nextNumber = sequence[i] + sequence[i - 1];
console.log(nextNumber);
sequence.push(nextNumber);
i++
}while(nextNumber < 4000000);


