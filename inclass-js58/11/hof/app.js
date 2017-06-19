var launch = function(){
	console.log('launch');
}

var launch2 = function(){
	console.log("launch adiff rocket");
}

//higher order function
function rocketlaunch(launchFn){
	for(var i = 10; i > 0;i --){
		console.log('i', '...');
	}
	launchFn();
}

//rocketlaunch(launch);

//rocketlaunch(launch2);


//setTimeout requires a function
setTimeout(function() {
rocketlaunch(launch);
}, 5000);

//jquery migjht look something like this