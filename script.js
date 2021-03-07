function pageLoad() {
    let colours = ['R', 'Y', 'G', 'B'];
    let shapes = ['Tri', 'Cir', 'Squ'];
    let deck = getDeck(colours, shapes);
    let shuffledDeck = shuffle(deck);
    showDeck(shuffledDeck);
}

//Creates an array(deck) of objects(cards)
function getDeck(colours, shapes) {
    //debugger;
    let deck = new Array();
    for (let i = 0; i < shapes.length; i++) {
        for (let j = 0; j < shapes.length; j++) {
            let card = {Suit: colours[i], Shape: shapes[j]};
            deck.push(card);
        }
    }
    return deck;
}

//Shuffles the deck randomly
function shuffle(deck) {
    for (let i = 0; i < 1000; i++) {
        let random1 = Math.floor((Math.random() * deck.length));
        let random2 = Math.floor((Math.random() * deck.length));
        let temp = deck[random1];
        deck[random1] = deck[random2];
        deck[random2] = temp;
    }
    console.log(deck);
    return deck;
}

function showDeck(deck) {
    //debugger;
    let deckHTML = '<table><tr>';        //Creates a string consisting of table tags tr=table row, td=table data
    for (let i = 0; i< deck.length; i++) {   //loops through the array and builds a string of cards to display
        card = deck[i].Suit + deck[i].Shape;      //Card suit and value
        deckHTML += `<td>${card}</td>`;  //template literal allows the card value to be added to the string - uses backticks `
    }
    deckHTML += '</tr></table>';
    document.getElementById("deck").innerHTML = deckHTML;   //displays the deck of cards
}
