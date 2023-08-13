
var rounds=0;
var playerpoints=0;
var computerpoints=0; 


const buttons = document.querySelectorAll('button'); // Creates a nodelist with the HTML button nodes, nodelist named "buttons"
buttons.forEach(addListener); // Uses the nodeList.forEach() method and tells it to execute addListener for each button node. 

function FeedbackClick(e) //Eventhandler, tells what to do when button is clicked
{
     var clickID = e.target.id;
     if (clickID=='btn1' && rounds<6) // if the button has this id, the user has chosen rock. 
     {
      rounds++;
      DisplayRounds(rounds);
      document.getElementById('feedback').innerHTML = 'You chose rock';  // give feedback that the user chose rock
      var opponent = ComputerPlay();     // creates and returns a random computer choice 
      if(opponent=="Rock") // compare the computer choice with rock 
      {
        document.getElementById('computerfeedback').innerHTML = 'The computer also chose rock - its a tie!';
      }
      else if (opponent=="Paper")
      {
        document.getElementById('computerfeedback').innerHTML = 'The computer chose paper - You lose!';
        computerpoints++;
        DisplayComputerPoints("Computer score: "+computerpoints)
      }
      else if (opponent=="Scissor")
      {
        document.getElementById('computerfeedback').innerHTML = 'The computer chose scissor - You win!';
        playerpoints++;
        DisplayPlayerPoints("Your score: " + playerpoints);
      }
  }
  
  else if(rounds==6)
  {
    checkWinner(playerpoints, computerpoints);
  }  
  
      else if (clickID=='btn2' && rounds<6) //if the user chose button with id btn2...
        {
        rounds++;
        DisplayRounds(rounds);
        document.getElementById('feedback').innerHTML = 'You chose paper';    //..give feedback that paper was chosen.
        var opponent = ComputerPlay();  
        if(opponent=="Paper") // compare the choice with rock 
        {
          document.getElementById('computerfeedback').innerHTML = 'The computer also chose paper - its a tie!';
        }
        else if (opponent=="rock")
        {
          document.getElementById('computerfeedback').innerHTML = 'The computer chose rock - You won!';
          playerpoints++;
          DisplayPlayerPoints("Your score: "+ playerpoints);
        }
        else if (opponent=="Scissor")
        {
          document.getElementById('computerfeedback').innerHTML = 'The computer chose scissor - You lose!';
          computerpoints++;
          DisplayComputerPoints("Computer score: "+ computerpoints)
        }
        else if(rounds==6)
        {
          checkWinner(playerpoints, computerpoints);
        }
        
     }
     else if (clickID=='btn3' && rounds<6)
     {
        rounds++;
        DisplayRounds(rounds); 
        document.getElementById('feedback').innerHTML = 'You chose scissor';
        var opponent = ComputerPlay();  
        if(opponent=="Paper") 
        {
          document.getElementById('computerfeedback').innerHTML = 'The computer chose paper - you win!';
          playerpoints++;
          DisplayPlayerPoints("Your score: "+ playerpoints);
        }
        else if (opponent=="Scissor")
        {
          document.getElementById('computerfeedback').innerHTML = 'The computer chose scissor- Its a tie!';
        }
        else if (opponent=="Rock")
        {
          computerpoints++;
          document.getElementById('computerfeedback').innerHTML = 'The computer chose rock- You lose!';
          DisplayComputerPoints("Computer score: "+computerpoints)
        }
        else if(rounds==6)
        {
          checkWinner(playerpoints, computerpoints);
        }
        
     }
     
}

function ComputerPlay()
{
    const selection = ["Rock", "Paper", "Scissor"];  // creates an array of string options 
    var index = Math.floor(Math.random()*3); // creates a random index to use for the array
    var computerChoice = selection[index];
    return computerChoice;  
}

function DisplayPlayerPoints(playerpoints)
{
    document.getElementById('playerpoints').innerHTML =playerpoints;
}

function DisplayComputerPoints(computerpoints)
{
    document.getElementById('computerpoints').innerHTML =computerpoints;
}
function DisplayRounds(rounds)
{
    document.getElementById('rounds').innerHTML = "Number of rounds " + rounds; 
}

function checkWinner(playerpoints, computerpoints)
{
    if (playerpoints>computerpoints)
    {
        document.getElementById('winner').innerHTML='You won!';
    }
    else if (computerpoints>playerpoints)
    {
        document.getElementById('winner').innerHTML='Too bad, you loose!';
    }
    else if (computerpoints==playerpoints)
    {
        document.getElementById('winner').innerHTML='You both win!';
    }
}

function addListener(button)
{
  button.addEventListener('click', FeedbackClick); //adds a listener and specifices "click" as
                                                 // the event-type and FeedbackClick as the eventhandler. 
}

function RefreshGame()
{
  location.reload();
}


