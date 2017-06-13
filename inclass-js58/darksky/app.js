/**
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if(request.readyState == 4){
    var parsedJSON = JSON.parse(request.responseText);
    console.log("Response: ", parsedJSON);
    var elem = document.getElementById('body');
    elem.innerHTML = parsedJSON.currently.temperature;
  }
};
request.open('GET', 'http://mockbin.org/bin/8309d265-402f-42ac-9c58-bda574a3fcbf');
request.send();
*/


var url = 'https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/32.72,-40.00';

$.get(url, function(r) {
  $('body').html(r.currently.temperature);
})