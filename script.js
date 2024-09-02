// let newBtn = document.createElement("button");
// newBtn.innerText ="click me!";

// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let modeBtn =document.querySelector("#mode");

// let currMode ="light-mode";
// modeBtn.addEventListener("click", () =>{
//    if(currMode === "light-mode"){
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//    } else{
//     currMode ="light-mode";
//     document.querySelector("body").style.backgroundColor = "red";
//    }
//    console.log(currMode);
// });

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText ="game was draw. play again.";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
    drawGame();
    }else{
        let userWin =true;
        if(userChoice === "rock"){
          userWin =  compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin =compChoice === "siccsor" ? false : true;

        }else {
           userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

