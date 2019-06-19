
function runGame() {
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let  diceValues = 0;
    getPlayerNames();
    
    let playerOneResults = rollMyDice(6);
    playerOneScore += updateScore(playerOneResults);

    let playerTwoResults = rollMyDice(6);
    playerTwoScore += updateScore(playerTwoResults);
}

function getPlayerNames(){
    let player1 = prompt("what is your name, player 1?");
    let player2 = prompt("What is your name, player 2?"); 
}

function rollMyDice(sidedDie){
    let side1 = Math.floor( Math.random() * sidedDie ) + 1;
    let side2 = Math.floor( Math.random() * sidedDie ) + 1;
    let diceValues = [];
    diceValues.push(side1);
    diceValues.push(side2);
    return diceValues;
}

function updateScore(playerDiceValues){
    let firstDieValue = playerDiceValues[0];
    let secondDieValue = playerDiceValues[1];
    let result = firstDieValue + secondDieValue;
    return result;
}

// function randomNumber(params) {
    
//     let die = "";
//     let iRollDice = "";
//    let i = []
    
//     iRollDice = prompt("how many times have you rolled?", 4);
    
//     function diceRoll(params) {
//     for (let i = 0; i < iRollDice; i++) {
      
   







function rollDice () {

    let diceSide1 = document.getElementById( 'dice-side-1' );
     let diceSide2 = document.getElementById( 'dice-side-2' );
    let  status = document.getElementById( 'status' );

    let side1 = Math.floor( Math.random() * 6 ) + 1;
    let side2 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotal = side1 + side2;

    diceSide1.innerHTML = side1;
    diceSide2.innerHTML = side2;

    status.innerHTML = 'You rolled ' + diceTotal + '.';

    if ( side1 === side2 ) {
        status.innerHTML += ' Doubles! round 2!';
    }
}








  runGame();














