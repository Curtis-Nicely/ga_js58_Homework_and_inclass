
//$(function(){


var googleMapKey = "AIzaSyDEsfH1PcatkRwfPc9yUe9BF818CiVQE-M";
var noaatoken = "taLVtdNOLLaXplKvyHGwPufsSfqWDXYz";
var noaaBaseURL = "https://www.ncdc.noaa.gov/cdo-web/api/v2/datacategories/WATER";
var noaaGet= $.ajax({ url: noaaBaseURL, data:{}, headers: { token: "taLVtdNOLLaXplKvyHGwPufsSfqWDXYz" }});


console.log(JSON);


 function initMap() {
        var ptJudith = {lat: 41.3609552, lng: -71.4823326};
        var matunuck = {lat: 41.373115, lng:-71.538362};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: ptJudith
 
        });


var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
var marker = new google.maps.Marker({
          position: ptJudith,
          map: map
        });
var marker = new google.maps.Marker({
          position: matunuck,
          map: map
        });
map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 5000);
        });


}


// create an object to display data
// function waveData(wave-height, period, direction, wind-direction, wind-speed, water-temp){
// 	this.waveHdata = wave-height;
// 	this.wavePdata = period;
// 	this.waveDdata = direction;
// 	this.wdDdata = wind-direction;
// 	this.wdSdata = wind-speed;
// 	this.wtrTdata = water-temp;

// }





	

//});


//41.3534954,-71.5319961,10.61z

//pt judith 41.3609552,-71.4823326,16.93z

//matunuck  41.373115, -71.538362