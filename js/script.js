//AP'S STATE (vaiables that change)

let board;
let playerTurn;
let Winner;
let mancalaATotal = 0;
let mancalaBTotal = 0;

// CASHED ELEMENT REFERENCES
let mancalaBoard = document.getElementById('mancala-board')
let restartButton = document.getElementById('restart-button')
const winMessageTextEl =document.getElementById('winning-message')
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
    document.getElementById(idx).textContent = pit;
       
   })
}


function handleClick(evt){
    let pitIdx= parseInt(evt.target.id);
    console.log(`at index # ${pitIdx}:  ${pits[pitIdx]} marbles`)
    console.log(`this player just played : ${playerTurn}`)
 
   if(pitIdx=== 6 || pitIdx === 13) return;
   
   if(playerTurn ===1 && pitIdx > 6) return;
   
   if(playerTurn < 0 && (pitIdx <= 6 || pitIdx == 13)) return;
  
        
    console.log(pits)
   
   
    distributeMarble(pitIdx)
    playerTurn === 1? playerTurn = -1 : playerTurn = 1
    console.log(`this current :${playerTurn}`)

    render();
    finishGame();
    

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
        } else if(playerTurn < 0 && numMarbles === 1 && (i=== 12)){
            playerTurn === 1? playerTurn = -1 : playerTurn = 1
            console.log(playerTurn < 0, numMarbles === 1, i === 12)    
        }
        
       numMarbles --
       i++
       if ( i ===14) i = 0;
       pits[i] ++
       
    
       
    }
    
 
}
// game finish get the winner stage 

function finishGame(){
   

   if(pits[7]=== 0 && pits[8]=== 0 &&pits[9]=== 0 && pits[10]=== 0 && pits[11]=== 0 && pits[12]=== 0 ){
       
        mancalaATotal = pits[0] + pits[1] + pits[2] + pits[3] + pits[4] +pits[5] +pits[6];
        pits[6] = mancalaATotal
        getWinner();
    console.log(`sideA to collect all the marbles from their side and place in mancalaA the toal is ${mancalaATotal}`)
    }
    if(pits[0]=== 0 && pits[1]=== 0 &&pits[2]=== 0 && pits[13]=== 0 && pits[4]=== 0 && pits[5]=== 0 ){
        
        mancalaBTotal = pits[7] + pits[8] + pits[9] + pits[10] + pits[11] +pits[12] +pits[13];
         pits[13] = mancalaBTotal;
         
         getWinner();
     console.log(`sideB to collect all the marbles from their side and place in mancala B the total is ${mancalaBTotal}`)

    }

    
    
}
 function getWinner(){
 // i want to detemine the winner. at this point 
 if(mancalaATotal > mancalaBTotal){
     winMessageTextEl.innerText = `playerA with ${mancalaATotal} over ${mancalaBTotal}Wins!`
    console.log( `playerA with ${mancalaATotal} Wins!`)
 }
 winMessageTextEl.innerText = `playerB with ${mancalaBTotal} over ${mancalaATotal}Wins!`
console.log( `playerB with ${mancalaBTotal} Wins!`)
 }

