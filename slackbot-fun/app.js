var Botkit = require('botkit');

var controller = Botkit.slackbot({
	debug:false
})
controller.spawn({
		token:'xoxb-214136492725-MgrymxYkpH3YNj9JtNtmHYr8',
}).startRTM();

controller.hears('roll the dice Glen', ['ambient'], function(bot, message) {
	var reply = "you rolled a " + randomDiceNumber();
	bot.reply(message, reply);
});

function randomDiceNumber(){
	return (Math.ceil(Math.random() * 1000) % 6) + 1
}

controller.hears('pug me glen', ['mention'], function(bot, message) {
	bot.reply(message, randomPugImage);
});

function randomPugImage(){
var images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcvrQBpYPXXerL4xRmzzLKEFVN1pSPNUvsLcfhZEjGJx_Pa29HiAh_eZn',
    'https://s-media-cache-ak0.pinimg.com/236x/19/6d/6c/196d6c522a00234c93133846bb068633--pet-costumes-for-dogs-pug-halloween-costumes.jpg',
    'http://assets2.bigthink.com/system/tinymce_assets/5479/original/pug_1.jpg?1494253660'
  ];
var randomImageIndex = (Math.ceil(Math.random() * 1000) % images.length)
var pugImage = images[randomImageIndex];

return pugImage;
}