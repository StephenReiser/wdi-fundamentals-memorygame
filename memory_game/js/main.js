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
    if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    };
};
};

var flipCard = function () {
    var cardID = this.getAttribute("data-id");
    console.log("User flipped " + cards[cardID].rank);
    console.log("User flipped " + cards[cardID].suit);
    console.log("User flipped " + cards[cardID].cardImage);
    cardsInPlay.push(cards[cardID].rank);
    this.setAttribute('src',cards[cardID].cardImage);
    checkForMatch();
}
//added from the DOM section
var createBoard = function () {
    for (i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
};
 

createBoard();


var resetButton = function () {
if (cardsInPlay.length > 2) {
    alert("Keep Playing");
} else {
    //added to clear the game-board
    var removeCard = document.getElementById("game-board");
    while (removeCard.firstChild) {
    removeCard.removeChild(removeCard.firstChild);
}
    cardsInPlay.length = 0;
    createBoard();

    }
        };