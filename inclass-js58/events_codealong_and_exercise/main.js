/*

Appending: Independent Practice

Make the delete and complete links do the following when clicked:

* When "Complete" is clicked, make the text for the item have a strikethrough decoration
* When "Delete" is clicked, remove the entire LI parent
* When adding an item via the input and submit button, add it to the UL list.
* Any newly added items must have the same delete and complete functionality as the previous ones
*/

$(function(){

var $favList = $("#fav-list");

$($favList).on('click', 'li a.delete', function(e){
	console.log("yay");
	$(this).parent().remove();

}

)

$($favList).on('click', 'li a.complete', function(e){
	$(this).css("text-decoration", "line-through");
})

$('#new-thing-button').on('click', function(){
	var currentValue = $('#new-thing').val();
	console.log(currentValue);
var listItem = $('<li class="fav-thing">' + currentValue' '<a class="complete" href="#">Complete</a> <a class="delete" href="#">Delete</a></li>')

listItem.appendTo(favList);
}
)

})

/*

Appending: Independent Practice

Make the delete and complete links do the following when clicked:

* When "Complete" is clicked, make the text for the item have a line-through decoration
* When "Delete" is clicked, remove the entire LI parent
* When adding an item via the input and submit button, add it to the UL list.
* Any newly added items must have the same delete and complete functionality as the previous ones



$(function(){
  var $favList = $('#fav-list');

  $favList.on('click', 'li a.complete', function(){
    var $span = $(this).parent().find('span');
    $span.css('text-decoration', 'line-through');
  });

  $favList.on('click', 'li a.delete', function(){
    $(this).parent().remove();
  });

  $('#new-thing-button').on('click', function() {
    // get whatever the user has typed in
    var currentValue = $('#new-thing').val();

    var listItem = $('<li class="fav-thing"><span>' + currentValue + '</span> <a class="complete" href="#">Complete</a> <a class="delete" href="#">Delete</a></li>');
    listItem.appendTo($favList);
    // or..
    // $favList.append(listItem);
  });

})
*/

/*

Appending: Independent Practice

Make the delete and complete links do the following when clicked:

* When "Complete" is clicked, make the text for the item have a line-through decoration
* When "Delete" is clicked, remove the entire LI parent
* When adding an item via the input and submit button, add it to the UL list.
* Any newly added items must have the same delete and complete functionality as the previous ones



$(function(){
  var $favList = $('#fav-list');

  $favList.on('click', 'li a.complete', function(){
    var $span = $(this).parent().find('span');
    $span.css('text-decoration', 'line-through');
  });

  $favList.on('click', 'li a.delete', function(){
    $(this).parent().remove();
  });

  $('#new-thing').on('keyup', function(event) {
    event.preventDefault();
    if(event.key == "Enter" && $(this).val() != ""){
      var currentValue = $(this).val();
      var listItem = $('<li class="fav-thing"><span>' + currentValue + '</span> <a class="complete" href="#">Complete</a> <a class="delete" href="#">Delete</a></li>');
      listItem.appendTo($favList);
      $(this).val('');
    }
  });
})*/




