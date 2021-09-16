//AP'S STATE (vaiables that change)

let board;
let playerTurn;
let Winner;
let mancalaATotal = 0;
let mancalaBTotal = 0;

// CASHED ELEMENT REFERENCES
let mancalaBoard = document.getElementById("mancala-board");
let restartButton = document.getElementById("restart-button");
let startButton = document.getElementById("start-button");
let youTubeBtnEl = document.getElementById("youTubeBtn");
let youTubeDiv = document.getElementById("youTube");

const welcomeMessageBoard = document.getElementById("welcome");
const winMessageTextEl = document.getElementById("winning-message-Text");
const winMessageDivEl = document.getElementById("winning-message");
const playerTurnEl = document.getElementById("playerTurn");

//EVENT LISTENERS
youTubeBtnEl.addEventListener("click", function () {
  youTubeDiv.classList.remove("noshow");
});

startButton.addEventListener("click", function () {
  welcomeMessageBoard.classList.replace("welcome", "noshow");
  init();
  render();
});
mancalaBoard.addEventListener("click", handleClick);
restartButton.addEventListener("click", function () {
  init();
  render();
});

// FUNCTIONS

function init() {
  playerTurn = 1;
  pits = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
  playerTurnEl.innerText = `Player A goes first`;
}

function render() {
  pits.forEach(function (pit, idx) {
    document.getElementById(idx).textContent = pit;
  });
  winMessageDivEl.classList.remove("show-message");
}

function handleClick(evt) {
  let pitIdx = parseInt(evt.target.id);
  if (pitIdx === 6 || pitIdx === 13) return;

  if (playerTurn === 1 && pitIdx > 6) return;

  if (playerTurn < 0 && (pitIdx <= 6 || pitIdx == 13)) return;

  distributeMarble(pitIdx);
  playerTurn === 1 ? (playerTurn = -1) : (playerTurn = 1);

  if (playerTurn < 1) {
    playerTurnEl.classList.add("Bturn");
    playerTurnEl.innerText = "Player B turn";
  } else {
    playerTurnEl.textContent = "Player A turn";
    playerTurnEl.classList.replace("Bturn", "Aturn");
  }

  render();
  finishGame();
}

function distributeMarble(i) {
  let numMarbles = pits[i];
  pits[i] = 0;
  while (numMarbles > 0) {
    if (playerTurn > 0 && i === 13) i = 0;
    if (playerTurn < 0 && i === 6) i = 7;
    if (playerTurn > 0 && numMarbles === 1 && i === 5) {
      playerTurn === 1 ? (playerTurn = -1) : (playerTurn = 1);
    } else if (playerTurn < 0 && numMarbles === 1 && i === 12) {
      playerTurn === 1 ? (playerTurn = -1) : (playerTurn = 1);
    }

    numMarbles--;
    i++;
    if (i === 14) i = 0;
    pits[i]++;
  }
}

function finishGame() {
  if (
    pits[7] === 0 &&
    pits[8] === 0 &&
    pits[9] === 0 &&
    pits[10] === 0 &&
    pits[11] === 0 &&
    pits[12] === 0
  ) {
    mancalaATotal =
      pits[0] + pits[1] + pits[2] + pits[3] + pits[4] + pits[5] + pits[6];
    pits[6] = mancalaATotal;

    getWinner();
  }
  if (
    pits[0] === 0 &&
    pits[1] === 0 &&
    pits[2] === 0 &&
    pits[3] === 0 &&
    pits[4] === 0 &&
    pits[5] === 0
  ) {
    mancalaBTotal =
      pits[7] + pits[8] + pits[9] + pits[10] + pits[11] + pits[12] + pits[13];
    pits[13] = mancalaBTotal;

    getWinner();
  }
}

function getWinner() {
  mancalaBoard.removeEventListener;
  winMessageDivEl.classList.add("show-message");
  if (mancalaATotal > mancalaBTotal) {
    winMessageTextEl.innerText = `Player A Wins!
    Player A: ${mancalaATotal} 
    Player B: ${mancalaBTotal}`;
  } else {
    winMessageTextEl.innerText = `Player B Wins!
    Player B: ${mancalaBTotal} 
    Player A: ${mancalaATotal}`;
  }
}
