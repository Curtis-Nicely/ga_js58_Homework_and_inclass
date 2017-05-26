var Person = function(aName, age){
	this.name = aName;
	this.age = age
	//this.age = MAth.ceil.Math.random() * 1000;
	this.gender = "gender"
}

Person.prototype.canDrive = function(){
	this.age >= 16){
		return true
	}else{
		return false
	}
}

Person.prototype.

var glen = new Person('Glen', 46);
console.log('the person is: ', glen.name)
console.log('the person gae is: ', glen.age)
glen.canDrive();
console.log('can they drive? ', glen.canDrive());