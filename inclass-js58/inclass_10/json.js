var myJson = '{"hello": "world", "foods": [{"name":"burger"}]}';
var parsedJson = JSON.parse(myJson);
console.log(parsedJson);

console.log(parsedJson.hello);
console.log(parsedJson.foods.length);

/**
Write JSON to represent the following:
An object with the keys: "address1", "address2", "city", "rooms"
For the rooms key, make it an array type that has 3 strings inside of it, "bedroom", "kitchen", "bathroom"
You can do this in a blank txt document
*/

var jsonObj = '{"address1": "12 morgan", "address2": "44 Road", "city": "NYC", "rooms": ["bedroom", "kitchen", "bathroom"]}'

var parsdeObj = JSON.parse(jsonObj);
console.log([parsdeObj]);