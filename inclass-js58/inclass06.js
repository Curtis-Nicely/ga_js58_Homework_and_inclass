

var obj1 = {breed: 'poodle', name: 'peter', color: 'blue'};

var obj2 = {breed: 'brittany', name: 'maeve', color: 'red'};

var obj3 = {breed: 'spaniel', name: 'dave', color: 'black'};

console.log(obj1.name, obj1.breed);
console.log(obj2.name, obj2.breed);
console.log(obj3.name, obj3.breed);

function proclaimDog(dog){
	console.log("my dog is: " + dog.name)
}

proclaimDog(obj3);


