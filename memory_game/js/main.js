var cards = ["queen", "queen", "king", "king"];
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
    console.log("User flipped " + cards[cardID]);
    cardsInPlay.push(cards[cardID]);
    checkForMatch();
}
flipCard(0);
flipCard(2);

 


