
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-hearts",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds"
}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match");
	} else {
		alert("Sorry, try again");
	}
};

function flipCard(cardID){
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	checkForMatch();
};

	
flipCard(0);
flipCard(1);


