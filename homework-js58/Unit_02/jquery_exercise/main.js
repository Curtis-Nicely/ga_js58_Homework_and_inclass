/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in the list. Your program must complete the following rules:

- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/

$(function() {

var $body = $('#body')
var $yourName = prompt('What is your name?');
$('#name').html($yourName);
if($yourName===null){
  alert("you didn't add an name, therefore the name POOPY will be added.")
$('#name').html('POOPY');
}


var $toDoList = $('#to-do-list');


$($toDoList).on('click', 'li a.complete', function(){
  $(this).parent().css("text-decoration", "line-through");
  
})
  var $button = $('#new-thing-button');
  // button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($toDoList);
   
  });
});
// adda an item to the list


var MyApp = {};

MyApp.addToList = function(list) {
  var $newLi = $('<li class="to-do">, + list <a class="complete" href="#">Complete</a></li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
}

var completer = function(){
var $completedList = $('<ul id="completed-list"><h2>Completed Tasks</h2></ul>')
body.append($completedList);

}


