


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
    init()
    render()
})
// FUNCTIONS
function init(){
    playerTurn = 1
    pits = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0]
}

function render(){
   pits.forEach(function(pit, idx ){
    // console.log(idx)
       document.getElementById(idx).textContent = pit;
       
   })
}


function handleClick(evt){
    let pitIdx= parseInt(evt.target.id);
    console.log(`at index # ${pitIdx}:  ${pits[pitIdx]} marbles`)
    console.log(`this player just played : ${playerTurn}`)
   // need a function to distribute marbles if the pit is not empty 
   if(pitIdx=== 6 || pitIdx === 13) return;
   // playerA(1) can not click on pits 6-13
   if(playerTurn ===1 && pitIdx > 6) return;
   //playerB(-1) can not click on 13 or 0-6
   if(playerTurn < 0 && (pitIdx <= 6 || pitIdx == 13)) return;
    // distributeMarble()
    

    
    console.log(pits)
   
   
    distributeMarble(pitIdx)
    playerTurn === 1? playerTurn = -1 : playerTurn = 1
    console.log(`this current :${playerTurn}`)
    render()
 }

// writing a function to take the number of marble in the bowl and sitribute them while the number is greater thatn 0. incrementing the marbles as well as the whole and decrementing the original marbles 

function distributeMarble(i){
    let numMarbles = pits[i];
    pits[i]= 0
    while (numMarbles > 0){
        
        if(playerTurn > 0 && i===13) i= 0 ;
        if (playerTurn <0 && i=== 6) i = 7;
        console.log( playerTurn, numMarbles, i)
        console.log(playerTurn > 0, numMarbles === 1, i === 6)
        if (playerTurn > 0 && numMarbles ===1 && (i === 5)){
            playerTurn === 1? playerTurn = -1 : playerTurn = 1
               console.log(`hit on distribute marble if condition `)
        }
       numMarbles --
       i++
       if ( i ===14) i = 0;
       pits[i] ++
       
    
       
    }
    
 
}