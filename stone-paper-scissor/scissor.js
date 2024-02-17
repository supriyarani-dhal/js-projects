let userScore = compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp")

const genCompChoice = () =>{
    let options = ["stone" , "paper" , "scissor"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        msg.innerText = "It's a draw match. Try again.";
        msg.style.color = "#EA1179"
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "sone" ? false : true;
        }
        showWinner(userChoice , compChoice , userWin);
    }
}

const showWinner = (userChoice , compChoice , userWin) =>{
    if(userWin){
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";
    }else{
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.color = "red";
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})