var Monkey = function(name, species, foodsEaten){

this.name = name;
this.species = species;
this.foodsEaten = foodsEaten;
}

Monkey.prototype.eatSomething = function(thingAsString){
	this.foodsEaten = this.foodsEaten + ',' + thingAsString;
console.log(thingAsString);

console.log(this.name);

}

Monkey.prototype.introduce = function(){
	console.log('Hello my name is ' + this.name + ' , i am a ' + this.species + ' and believe it or not, and I eat, ' +  this.foodsEaten);
}


//first MOnkey
var minkey = new Monkey('Joe', 'monster', 'apples')

minkey.eatSomething('poo');

minkey.introduce();


var minkey2 = new Monkey('captain', 'crazy', 'anything');

minkey2.introduce();