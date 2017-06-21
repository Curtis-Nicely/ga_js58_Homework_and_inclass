$(function(){



var videoIds = ["_OBlgSz8sSM", "CsGYh8AacgY"];
var randIndex = Math.ceil(Math.random() * 100) % videoIds.length;


console.log(randIndex);

$('#random-video-btn').on('click', function(){
	$('#random-video-btn').empty();


var element = '<iframe width="100%" src="https://www.youtube.com/embed/' + videoIds[randIndex] + '" frameborder="0" allowfullscreen></iframe>'

$('#random-video').append($(element))

$('#add-video').o('click', function(){
	var currentId = $('#random-video-id').val();
	videoIds.push(currentId);
	$('. #random-video-id').val();
})
});

});