//AP'S STATE (vaiables that change)
let board;
let playerTurn;
let Winner;



init()
// CASHED ELEMENT REFERENCES
let mancalaBoard = document.getElementById('mancala-board')
let restartButton = document.getElementById('restart-button')
// let pits = document.querySelectorAll('.pit')

//EVENT LISTENERS
mancalaBoard.addEventListener('click', handleClick)

// FUNCTIONS
function init(){
    playerTurn = 1
    pits = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0]
}


function handleClick(evt){
    let pitIdx= parseInt(evt.target.id);
    console.log(`whole # ${pitIdx},has ${pits[pitIdx]} marbles`)
   // need a function to distribute marbles 
 }

// writing a function to take the number of marble in the bowl and sitribute them while the number is greater thatn 0. incrementing the marbles as well as the whole and decrementing the original marbles 

function distributeMarble(){
    let numMarbles = pits[pitIdx];
    pits[pitIdx]= 0;
    pitIdx ++;
    while (numMarbles > 0) {
        pits
    }
numMarbles --
}