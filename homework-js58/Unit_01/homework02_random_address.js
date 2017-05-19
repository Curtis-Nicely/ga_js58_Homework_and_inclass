/**

Glen Steinmacher

Generate random addresses!
For this I’d like you to:
Create a new array containing dummy data for Street, City, State.
Now each time you run the script, it should print a new randomly generated address from the arrays and random numbers for street numbers.
For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506
As a bonus, randomly include an apartment number (so sometimes an address has an apartment while others do not).
*/



// declare address variables as arrays for 
var apt = ['apt 2 ', 'apt 5b ', 'apt 127f ', 'apt 332 ', 'apt 6c '];
var street = ["Elm Street", "Oak Street", "Sycamore Avenue", "Maple Avenue", '74th Street'];
var city = [" Linden", " Long Branch", " Roselle", " Elizabeth", " West New York", " Brooklyn", " Pluto"];
var state = [" NJ", " CT", " NY", " RI"," MA", " MI", " KS", " PA", " CA", " MD", " FL"];

//get a random street number with sometimes apt number
var streetNumber =  Math.floor(Math.random() * 27);
if(streetNumber <= 8){
streetNumber = apt[Math.floor(Math.random() * 5)] + streetNumber;
}

//access a random index from respective address array
var randomStreet = street[Math.floor(Math.random() * street.length)];
var randomCity = city[Math.floor(Math.random()* city.length)];
var randomState = state[Math.floor(Math.random()* state.length)];

// print the random address to the console
console.log(streetNumber + ' '  + randomStreet + ' ' + randomCity + ' ' + randomState);
