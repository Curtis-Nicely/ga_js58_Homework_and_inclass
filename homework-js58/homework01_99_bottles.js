/**

Glen Steinmacher

Make a javascript script that prints the lyrics to 99 bottles of 
beer on the wall. Take into account the singular and plural versions of “beer” and “beers”.
*/

/** 99 bottles of beer on the wall, 99 bottles of beer,
if one of those bottles of beer should happen to fall -1 bottle of beer on the wall
*/


var lyric00 = " bottle of beer on the wall, ";
var lyric01 = " bottles of beer on the wall, ";
var lyric02 = " bottle of beer, ";
var lyric03 = " bottles of beer, ";
var lyric04 = "if one of those bottles should happen to fall, ";
var lyric05 = "if that bottle should happen to fall... no more bottles.";

for(var beerBottles = 99; beerBottles <= 99; beerBottles --) {
	if(beerBottles > 1){
		console.log(beerBottles + lyric01 + beerBottles + lyric03 + lyric04); 
	}else{
		console.log(beerBottles + lyric00 + beerBottles + lyric02+ lyric05);
		break;

	}
}