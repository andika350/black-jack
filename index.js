let cards = [];
let sum = 0;
let blackJack = false;
let alive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let player ={
    name: "Jane",
    chips: 150
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name +": $"+player.chips


function getRandomCard () {
   
   let cardValue = Math.floor(Math.random()*13)+1;
   
   if(cardValue === 1) {
       return 11;
   } else if (cardValue > 10) {
       return 10;
   } else {
       return cardValue;
   }
}


function startGame(){

    if (alive === false) {
        alive = true;
        let firstCard = getRandomCard ()
        let secondCard = getRandomCard ()
        cards = [firstCard,secondCard]
        sum = firstCard + secondCard;
        renderGame()
    }
    
}

function renderGame() {
    
    cardsEl.textContent = "Cards: " 

    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i]+" ";
    }


    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
    message = "Draw card?";
    alive = true;

    } else if (sum === 21) {
        message = "Blackjack!";
        blackJack = true;
        alive = false;
    } else {
        message = "Bust!";
        alive = false;
    }
    
   messageEl.textContent = message;
}

function newCard() {

    if (alive === true && blackJack === false) {
        let newCard = getRandomCard ()
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
    
    
    
}
