var cards = [
    {
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
}, {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
}, { 
    rank: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
}, {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 	"images/king-of-diamonds.png"                      
}
];
var cardsInPlay = [];

//checks to see if there is a match with first two cards
var checkForMatch = function () {
    //this top line is excluded from GA guide
    //if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}
//}

var flipCard = function (cardID) {
    console.log("User flipped " + cards[cardID].rank);
    console.log("User flipped " + cards[cardID].suit);
    console.log("User flipped " + cards[cardID].cardImage);
    cardsInPlay.push(cards[cardID].rank);
    checkForMatch();
}
flipCard(0);
flipCard(2);

 


