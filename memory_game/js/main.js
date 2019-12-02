var cards = ['queen', 'queen', 'king', 'king',];
console.log("User flipped" + " " +cards[0])
console.log("User flipped" + " " +cards[2])
var cardsInPlay = []
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');
var cardOne = cards[0];
var cardTwo = cards[2];
if (cardsInPlay.length === 0) {
}	else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry try again!")
}

