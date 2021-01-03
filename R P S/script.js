//grapping the rock paper and scissors.
let r = document.querySelector(".r");
let p = document.querySelector(".p");
let s = document.querySelector(".s");
let result = document.querySelector(".winOrLose");
//just putting all of them in an array
let rps = [r,p,s];

var playerChoice;
let prompt;
// the computer choice...
let possibilities= "rps"; //what letters can the computer choose from
let randomNumber = Math.floor(Math.random()*3);
let computerChoice = possibilities[randomNumber];
//what will happen when a user chooses.
for(let i = 0; i < 3; i++){
    rps[i].addEventListener("click",function(){
  
        // change the opacity of the image when the user clicks one of them 
        document.querySelectorAll(".game")[i].style.opacity = 0.5;
        //change the opacity of the computer choosen image
        document.querySelector("." + computerChoice).style.opacity = 0.5;
        //get the value that the player choose 
        playerChoice = rps[i].getAttribute("class")[0];
    if(playerChoice == computerChoice){
        prompt = "Tie!";
        //if the player wins
    }else if(playerChoice == "r" && computerChoice == "s"){
        prompt = "You win!";
    }else if(playerChoice == "p" && computerChoice == "r"){
        prompt = "You win!";
    }else if(playerChoice == "s" && computerChoice == "p"){
        prompt = "You win!";
        //if the player lost
    }else if(playerChoice == "r" && computerChoice == "p"){
        prompt = "You lost!";
    }else if(playerChoice == "p" && computerChoice == "s"){
        prompt = "You lost!";
    }else if(playerChoice == "s" && computerChoice == "r"){
        prompt = "You lost!";
    }
    result.innerHTML = prompt;
    let btn = document.createElement("button");
    btn.innerHTML = "play again?";
    document.querySelector(".lastContainer").appendChild(btn);
    //make the button functional to play again
    btn.addEventListener("click",function(){
        location.reload();
    })
})
}


