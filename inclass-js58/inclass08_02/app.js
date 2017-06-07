		

$(function(){



var container = $('div.container');



$('a').click(function(event){
	event.preventDefault();
	var counter = 0;
 	counter++;
 	console.log(counter);

	$('#link').text("You clicked me");
	




});

	$('#btn').click(function(){
	$(this).text('CLOCK');
	

	var bg = $('#bod');
	$(bg).toggle(function(){
		$(this).css('background-color', 'blue');

	
	
	})

});


$('#btn').dblclick(function(){
	alert("WOAH!");
	$(bg).toggle(function(){
$(this).css('background-color', 'red')
	})
})



});

