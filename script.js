
let humanScore = 0
,computerScore = 0;

function getComputerChoice(){
    let randInt = Math.floor(Math.random()*3);
    if (randInt==0) return 'rock';
    if (randInt==1) return 'paper';
    if (randInt==2) return 'scissor';
}

function getHumanChoice(){
    let input = prompt("Choose an option:",'Rock');
    input = input.toLowerCase();
    console.log(input);
}

const humanSelection = getHumanChoice();
const compterSelection = getComputerChoice();

function playRound(humanSelection,computerChoice){
    

}