let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

    //rock, paper, scissors
}

const drawGame = () =>{
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin, userChoice, comptChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${comptChoice}`;
        msg.style.backgroundColor = "green";
    }else{
       compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${comptChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("user choice", userChoice)
    // Generate computer choice -> modular
    const comptChoice = genCompChoice();
    console.log("comp choice",comptChoice);

    if( userChoice === comptChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissoes, paper
            userWin = comptChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissoes, rock
            userWin = comptChoice === "scissors" ? false : true;
        }else{
            // rock, paper
            userWin = comptChoice === "rock" ? false : true;
        }
            showWinner(userWin,userChoice,comptChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
