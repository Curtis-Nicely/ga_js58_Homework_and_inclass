// replace this entire code block with the config found in the firebase dashboard
// for your created database



  var config = {
    apiKey: "AIzaSyCIQ-kp5Wcdo3xUUH5SSxZaF9QEosbkh5U",
    authDomain: "dope-project-723f1.firebaseapp.com",
    databaseURL: "https://dope-project-723f1.firebaseio.com",
    projectId: "dope-project-723f1",
    storageBucket: "dope-project-723f1.appspot.com",
    messagingSenderId: "171628608565"
  };
firebase.initializeApp(config);



// Get a reference to the database service
var database = firebase.database();

//database.ref("/hello-world").set({ hello: "world" })

$(function(){

$("#add-button").on('click', function(){
	console.log($('#new-item').val());
	 
var value = $('#new-item').val();
//grab  a reference to the 
	var item = database.ref("/todo-items").push();
	item.set({ value: value})
	$('#new-item').val("");
});


//grab a reference to the todo items key
database.ref("/todo-items").on("value", function(snapshot){
	var list = $('#list-items');
	list.empty();
	console.log(snapshot.val());
	snapshot.forEach(function(listItem){
		var item = listItem.val().value;
	list.append('<li data-id="' + listItem.key +'">' + item + ' <a href="#" class="remove">Remove</a></li>');

	});
});
$('#list-items').on('click', 'li a', function(){
var itemId = $(this).parent().data('id');
database.ref("/todo-items/" + itemId).remove();

});

});







// // replace this entire code block with the config found in the firebase dashboard
// // for your created database
// var config = {
//     apiKey: "AIzaSyCkOTAMdJzrxT6PZ0IQXxlgPb4jDmS9lRk",
//     authDomain: "super-dope-project.firebaseapp.com",
//     databaseURL: "https://super-dope-project.firebaseio.com",
//     projectId: "super-dope-project",
//     storageBucket: "super-dope-project.appspot.com",
//     messagingSenderId: "845892633518"
//   };
// firebase.initializeApp(config);

// // Get a reference to the database service
// var database = firebase.database();

// $(function(){
//   $("#add-button").on('click', function(){
//     var value = $('#new-item').val();

//     // grab a reference to the "todo-items" key in firebase
//     // and then create a new item that we set data on
//     var item = database.ref("/todo-items").push();
//     item.set( { value: value, chicken: "chicken" } )
//   })

//   // grab a reference to the todo-items key and ...
//   database.ref("/todo-items").on("value", function(snapshot){
//     var list = $('#list-items');
//     list.empty();
//     console.log(snapshot.val());

//     snapshot.forEach(function(listItem){
//       var item = listItem.val().value;
//       list.append('<li data-id="' + listItem.key +'">' + item + ' <a href="#" class="remove">Remove</a></li>');
//     })
//   })

//   // add an event listener for every a tag inside of a li tag in our list
//   $('#list-items').on('click', 'li a', function(){
//     // retrieve the value of the 'data-id' attribute on the parent <li> element
//     // so we can remove it from firebase
//     var itemId = $(this).parent().data('id');
//     database.ref("/todo-items/" + itemId).remove();
//   });
// })