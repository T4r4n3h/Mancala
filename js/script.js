


//AP'S STATE (vaiables that change)

let board;
let playerTurn;
let Winner;



init()
// CASHED ELEMENT REFERENCES
let mancalaBoard = document.getElementById('mancala-board')
let restartButton = document.getElementById('restart-button')


//EVENT LISTENERS
mancalaBoard.addEventListener('click', handleClick)
restartButton.addEventListener('click', function(){

})
// FUNCTIONS
function init(){
    playerTurn = 1
    pits = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0]
}


function handleClick(evt){
    let pitIdx= parseInt(evt.target.id);
    console.log(`at index # ${pitIdx}:  ${pits[pitIdx]} marbles`)
   // need a function to distribute marbles if the pit is not empty 
   if(pitIdx=== 0) return
   // playerA(1) can not click on pits 6-13
   if(playerTurn ===1 && pitIdx > 6) return
   //playerB(-1) can not click on 13 or 0-6
   if(playerTurn < 0 && (pits[pitIdx] <= 6 || pit[Idx] == 13)) return;
    // distributeMarble()
    distributeMarble(pitIdx)
 }

// writing a function to take the number of marble in the bowl and sitribute them while the number is greater thatn 0. incrementing the marbles as well as the whole and decrementing the original marbles 

function distributeMarble(i){
    let numMarbles = pits[i];
   pits[i]= 0
    while (numMarbles > 0){
        
       numMarbles --
       i++
       pits[i] ++
       console.log( numMarbles)
    }
    
 
}