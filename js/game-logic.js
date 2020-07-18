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

    //TO DO: 
    //evaluate ties first.
    //return 'Tie';
    //type always wins. 
    //values win if that's a tie. 
    //if the above are both ties, then it's an overall tie. 
    //if no ties, then evaluate types at the end. 


    //Takes round number, and jumps to the appropriate round evaluation. 

    //Evaluates for a double tie for type and strength values. 
    //Checks for double tie on move 1. 
    //Else if type ties, then evalutates strength scores. 

    //Using a switch to determine round: 

    switch(round){
        case 1: //round 1
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
        if(playerOneMoveTwoType === playerTwoMoveTwoType){ 
            if(playerOneMoveTwoValue === playerTwoMoveTwoValue){
                return "Tie";
            }
    
            else if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
                return "Player One";
            }
    
            return "Player Two";
        }

        //evaluates types and determines winners for move 1
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
    if(playerOneMoveThreeType === playerTwoMoveThreeType){ 
        if(playerOneMoveThreeValue === playerTwoMoveThreeValue){
            return "Tie";
        }

        else if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
            return "Player One";
        }

        return "Player Two";
    }

    //evaluates types and determines winners for move 1
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

//setPlayerMoves('Player One', 'scissors', 2, 'paper', 2, 'rock', 2);
//setPlayerMoves('Player Two', 'rock', 2, 'scissors', 2, 'paper', 2);
//console.log(`${getRoundWinner(3)}`);

function getGameWinner() {
/*
TO DO: 
getGameWinner() - Main Functionality
17) a function called getGameWinner should exist
18) should declare when player one wins
19) should declare when player two wins
20) should declare when the game is a tie

getGameWinner() - Main Functionality
21) should return null if not all values are set

*/

} //close getGameWinner()

function setComputerMoves(){
    //TO DO: 
    //Chose 3 randome move types. 
    //Chose random strength values between 1-99 (Will likely need to multiply by 99 + 1.)

}//close setComputerMoves()