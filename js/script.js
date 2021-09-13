//AP'S STATE (vaiables that change)
let board;
let playerTurn;
let Winner;

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
// write out a code that allows the ideces of the board corespond with doc.

function handleClick(evt){
    
        
        let pitNum = parseInt(evt.target.id);
        console.log(pits[pitNum],pitNum)
   
   
}
init()

    