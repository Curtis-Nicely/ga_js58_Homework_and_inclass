var x = "Hello "
console.log(x + "Robert");

var age = 65;
if(age >=21){
	console.log("you may legally have a drink");
	if(age < 25){console.log("you prob want jagger");}
	if(age>=25 && age<60){console.log("you want an old fashioned");}
	if(age>=60) {console.log("you want brandy");}
}

var counter = 0;
while(counter < 10) {
	console.log("woohoo! " + counter)
counter++;

	if(counter %3 == 0){
		break;
	}
		
}