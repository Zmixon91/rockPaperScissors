// init vars
// Not even using all of these at the moment, might trim down when I rework the UI
var gameHistoryElem = document.getElementById('gameHistory');
var gameTitlePanelElem = document.getElementById('gameTitlePanel');
var gameTextElem = document.getElementById('gameText');
var gameImageElem = document.getElementById('gameImage');
var gameState = null;

// write functions

function getCompChoice() {
    // Pick at random
    // 1=rock,2=paper,3=scissors
    return Math.floor(Math.random() * 3) + 1;
}

function gameWrite(state) {
    // Writes results to page
    gameTextElem.innerText = "You " + state;
    switch (state) {
        case "WIN":
        gameTitlePanelElem.classList.remove("panel-primary");
        gameTitlePanelElem.classList.remove("panel-warning");
        gameTitlePanelElem.classList.remove("panel-danger");
        gameTitlePanelElem.classList.add("panel-success");
        break;
        case "STALEMATE":
        gameTitlePanelElem.classList.remove("panel-primary");
        gameTitlePanelElem.classList.remove("panel-danger");
        gameTitlePanelElem.classList.remove("panel-success");
        gameTitlePanelElem.classList.add("panel-warning");
        break;
        case "LOSE":
        gameTitlePanelElem.classList.remove("panel-primary");
        gameTitlePanelElem.classList.remove("panel-warning");
        gameTitlePanelElem.classList.remove("panel-success");
        gameTitlePanelElem.classList.add("panel-danger");
        break;
    }
}

function runGame(newChoice) {
    // Change the game image to players choice
    gameImageElem.setAttribute("src", "img/" + newChoice.toLowerCase() + ".png");
    // Get Computer Choice
    var computerChoice = getCompChoice();
    // Allow us to get human readable output
    var computerText = {
        1: "ROCK",
        2: "PAPER",
        3: "SCISSORS"
    }
    // Process Player Choice !!! Kinda redundant now? I'll fix later !!! This should be rewritten probably maybe numbers?
    var playerChoice = newChoice;
    var playerChoiceObj = {
        ROCK: 3,
        PAPER: 1,
        SCISSORS: 2
    }
    // Write to the game History so we can see what everyone got
    gameHistoryElem.innerHTML += "<br />";
    gameHistoryElem.innerText += "Computer: " + computerText[computerChoice] + " Player: " + playerChoice;
    // Actual game logic !!! I could probably rewrite this with numbers in the objects to determine a stalemate
    
    if (playerChoiceObj[playerChoice] === computerChoice) {
        gameWrite("WIN");
    } else if (playerChoice === computerText[computerChoice]) {
        gameWrite("STALEMATE");
    } else {
        gameWrite("LOSE");
    }
}