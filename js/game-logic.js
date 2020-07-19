// All code should be written in this file.

// player 1 Move types
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

//player 1 move strength values
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

//player 2 move types
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

//player 2 move strength values
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

//Assigns user input to global variables for player, movetypes, and values. Also checks for errors and invalid inputs. 
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){

    //Checks for missing values
    if(moveOneType === undefined || moveOneValue === undefined || moveTwoType === undefined || moveTwoValue === undefined || moveThreeType === undefined || moveThreeValue === undefined){
        return;
    }

    //checks if move one types are valid. 
    //I discovered here that this is a weird ass way to check against multiple possible inputs, but it works and I'm rolling with it.
    //I will carry this over to the other error checking functions as well. Sorry in advance. 
    //Maybe this isn't weird, and it's the normal way of checking these things...
    else if(moveOneType !== "rock" && moveOneType !== "paper" && moveOneType !== "scissors"){
        //return console.log(`moveOneType = ${moveOneType}, and is evaluated to ${moveOneType !== "rock"} when compared to " !== rock".`);
        return '';
    }
 
    //checks if move two types are valid. 
    else if(moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors'){
        return '';
    }

    //checks if move three types are valid. 
    else if(moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors'){
        return '';
    }

    //checks if move values are less than 1.
    else if(moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){
        return '';
    }

    //checks if move values are greater than 99. 
    else if(moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99){
        return '';
    }

    //checks if move values sum to greater than 99. 
    else if(moveOneValue + moveTwoValue + moveThreeValue > 99){
        return '';
    }

    //after all error checking is complete, set moves accordingly. 
    if(player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;

        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    }

    else if(player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;

        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    }

    //else return console.log('Something is wrong with setPlayerMoves()');
    else return;

}//close setPlayerMoves


//compares moves and values for current round and determines winner. 
function getRoundWinner(round){

            //checks for invalid round inputs
            if(round !== 1 && round !== 2 && round !== 3){
                return null;
            }

    //Using a switch to determine round:
    //Takes round number, and jumps to the appropriate round evaluation. 
    //Checks for tie at beginning of each round, after ties are evaluated round winner is determined. 
    //Switch will also check for present values for move values and types before determining winner. 
    switch(round){
        
        case 1: //round 1
        if(playerOneMoveOneType === undefined || playerOneMoveOneValue === undefined){
            return null;
        }

        if(playerTwoMoveOneType === undefined || playerTwoMoveOneValue === undefined){
            return null;
        }
        
        if(playerOneMoveOneType === playerTwoMoveOneType){ 
                
                if(playerOneMoveOneValue === playerTwoMoveOneValue){
                    return "Tie";
                }
        
                else if(playerOneMoveOneValue > playerTwoMoveOneValue){
                    return "Player One";
                }
        
                return "Player Two";
            }

            //evaluates types and determines winners for move 1
            else if(playerOneMoveOneType === 'rock'){
             if(playerTwoMoveOneType === 'paper'){
             return 'Player Two';
             }
             else return 'Player One';
            }

            else if(playerOneMoveOneType === 'paper'){
                if(playerTwoMoveOneType === 'scissors'){
               return 'Player Two';
               }
               else return 'Player One';
         }

         else if(playerOneMoveOneType === 'scissors'){
                if(playerTwoMoveOneType === 'rock'){
                return 'Player Two';
                }
                else return 'Player One'
         }

        break;

        case 2: //round 2
        //checks for variables being undefined. 
        if(playerOneMoveTwoType === undefined || playerOneMoveTwoValue === undefined){
            return null;
        }

        if(playerTwoMoveTwoType === undefined || playerTwoMoveTwoValue === undefined){
            return null;
        }
        //checks for double ties
        if(playerOneMoveTwoType === playerTwoMoveTwoType){ 
            if(playerOneMoveTwoValue === playerTwoMoveTwoValue){
                return "Tie";
            }
            //determines winner
            else if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
                return "Player One";
            }
    
            return "Player Two";
        }

        //evaluates types and determines winners for move 2
        else if(playerOneMoveTwoType === 'rock'){
         if(playerTwoMoveTwoType === 'paper'){
         return 'Player Two';
         }
         else return 'Player One';
        }

        else if(playerOneMoveTwoType === 'paper'){
            if(playerTwoMoveTwoType === 'scissors'){
           return 'Player Two';
           }
           else return 'Player One';
     }

     else if(playerOneMoveTwoType === 'scissors'){
            if(playerTwoMoveTwoType === 'rock'){
            return 'Player Two';
            }
            else return 'Player One'
     }

    break;

    case 3: //round 3
    
    if(playerOneMoveThreeType === undefined || playerOneMoveThreeValue === undefined){
        return null;
    }

    if(playerTwoMoveThreeType === undefined || playerTwoMoveThreeValue === undefined){
        return null;
    }
    
    if(playerOneMoveThreeType === playerTwoMoveThreeType){ 
        if(playerOneMoveThreeValue === playerTwoMoveThreeValue){
            return "Tie";
        }

        else if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
            return "Player One";
        }

        return "Player Two";
    }

    //evaluates types and determines winners for move 3
    else if(playerOneMoveThreeType === 'rock'){
     if(playerTwoMoveThreeType === 'paper'){
     return 'Player Two';
     }
     else return 'Player One';
    }

    else if(playerOneMoveThreeType === 'paper'){
        if(playerTwoMoveThreeType === 'scissors'){
       return 'Player Two';
       }
       else return 'Player One';
 }

 else if(playerOneMoveThreeType === 'scissors'){
        if(playerTwoMoveThreeType === 'rock'){
        return 'Player Two';
        }
        else return 'Player One'
 }

break;

    }//close round switch


}//close getRoundWinner

function getGameWinner() {
/*
TO DO: Done
18) should declare when player one wins
19) should declare when player two wins
20) should declare when the game is a tie
*/

//21) should return null if not all values are set
//checking move one type and value for both players. 
if(playerOneMoveOneType === undefined || playerOneMoveOneValue === undefined){
    return null;
}

if(playerTwoMoveOneType === undefined || playerTwoMoveOneValue === undefined){
    return null;
}
//checking move two type and values for both players. 
if(playerOneMoveTwoType === undefined || playerOneMoveTwoValue === undefined){
    return null;
}

if(playerTwoMoveTwoType === undefined || playerTwoMoveTwoValue === undefined){
    return null;
}
//checking move three type and values for both players. 
if(playerOneMoveThreeType === undefined || playerOneMoveThreeValue === undefined){
    return null;
}

if(playerTwoMoveThreeType === undefined || playerTwoMoveThreeValue === undefined){
    return null;
}

//Will add to these variables on who wins. Winner = whichever variable is larger. 
let playerOneScore = 0;
let playerTwoScore = 0;

//Determining Winner for round 1
if(getRoundWinner(1) === 'Tie'){
    playerOneScore += 1;
    playerTwoScore += 1;
}

else if(getRoundWinner(1) === 'Player One'){
    playerOneScore += 1;
}
else playerTwoScore += 1;

//Determining Winner for round 2
if(getRoundWinner(2) === 'Tie'){
    playerOneScore += 1;
    playerTwoScore += 1;
}

else if(getRoundWinner(2) === 'Player One'){
    playerOneScore += 1;
}
else playerTwoScore += 1;

//Determining Winner for round 3
if(getRoundWinner(3) === 'Tie'){
    playerOneScore += 1;
    playerTwoScore += 1;
}

else if(getRoundWinner(3) === 'Player One'){
    playerOneScore += 1;
}
else playerTwoScore += 1;

if(playerOneScore === playerTwoScore){
    return 'Tie';
}

else if(playerOneScore > playerTwoScore){
    return 'Player One';
}

else return 'Player Two';

} //close getGameWinner()

/* Debugging
setPlayerMoves('Player One', 'rock', 2, 'paper', 2, 'scissors', 2);
setPlayerMoves('Player Two', 'scissors', 1, 'rock', 1, 'paper', 1);

console.log(`${getRoundWinner(1)} wins round 1!`);
console.log(`${getRoundWinner(2)} wins round 2!`);
console.log(`${getRoundWinner(2)} wins round 3!`);

console.log(`${getGameWinner()} wins the game!`);
*/

function setComputerMoves(){
    //TO DO: 
    //Chose 3 randome move types. 
    //Chose random strength values between 1-99 (Will likely need to multiply by 99 + 1.)

}//close setComputerMoves()