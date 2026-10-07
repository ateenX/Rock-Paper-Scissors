
//window.alert("Script is connected");
/* Pseudocode - Rock Paper Scissor


//Create Function getComputerChoice 


// Function to get human choice
/*Display instruction and ask user for input between 1-3.
1 == Rock
2 == Paper
3 == Scissors

Save players input in userSelection */

function getComputerChoice(min,max){
   //return Math.random() * (max-min) + min;  
   const minCeiled = Math.ceil(min);
   const maxFloored = Math.floor(max);
   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);  
    
}


function getHumanChoice(){
    return prompt("Please select the following inputs ; \nRock \nPaper\nScissors");
}

 //const humanChoice = getHumanChoice().toLowerCase();
// Score Tracking 
// Round Trackerx
let humanScore = 0;
let computerScore = 0;
let round = 0;


//const humanChoice = getHumanChoice().toLowerCase();
//const computerChoice = getComputerChoice(1,4);

//Playing a Single Round

//console.log("Current Selection from both sides:\nHuman Selection: " +humanChoice +"\nComputer Selection: " + computerChoice);



//Does the decision making for both human and computer and also increments scores
function playRound(humanChoice, computerChoice){
  
    switch(humanChoice + computerChoice){
        case 'rock1':
        case 'paper2':
        case 'scissors3': 
        return "It's a Tie";
        break;

        case 'rock2':
            computerScore++;
            return 'Paper Covers Rock\n Computer Wins!!!';    
        break;

        case 'rock3':
            humanScore++; 
            return "Rock Smashes Scissors \n Human Wins!!!:";
        break;

        case 'paper1':
            humanScore++; 
            return "Paper Covers Rock\n Human Wins!!!!";
        break;
        case 'paper3':
            computerScore++;
            return "Scissors Cuts Paper\n Computer Wins!!!"
        break;
        case 'scissors1':
            computerScore++;
            return "Rock Smashes Scissors\nComputer Wins!!!";
        break;
        case 'scissors2':
            humanScore++; 
            return "Scissors Cuts Paper\nHuman Wins!!!";
        break;

        default:
            console.log("Please check your input and try agin");

    }

}
/* 
while (round < 4){ //repeats the game 5 times calling
    getHumanChoice();
    playRound(humanChoice,computerChoice);
    round++;
}
*/

//Print out for final Score and Round Winner
console.log("The Final Score is:\nHuman Score " + humanScore +"\n Computer Score: " + computerScore);
if(humanScore > computerScore){
    console.log("Human Wins");
}
else if (computerScore > humanScore){
    console.log("Computer Wins");
}
else{
    console.log("It is a tie");
}



//playGame();

let playerSelection = document.querySelector('#option');

playerSelection.addEventListener('click', function(event)
{
    let target = event.target;

    switch(target.id){
        case 'rock':
            console.log('Rock button was clicked');
            humanChoice = 'rock';
            playRound();
            break;
        case 'paper':
            console.log('Paper button was clicked');
            humanChoice = 'paper';
            break;
        case 'scissors':
            console.log('Scissor button was clicked');
            humanChoice = 'scissors';
            break;
    }
});



//console.log();

//console.log("The Outcome of this game is " + playRound(humanChoice,computerChoice)+ "\nThe game score is:\nHuman Score: " + humanScore + "\nComputer Score: " + computerScore);