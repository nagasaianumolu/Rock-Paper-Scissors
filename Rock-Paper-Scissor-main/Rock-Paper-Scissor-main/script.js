let userScore = 0;
let compScore = 0;
let limit = 0;
const choices = document.querySelectorAll(".userchoices");
const compchoices = document.querySelectorAll(".compchoices");
let msg = document.getElementById("msg");
let user = document.getElementById("userscore");
let comp = document.getElementById("compscore");


let start = document.getElementById("start");
start.addEventListener("click", () => {
    limit = prompt("Best of ?");
    user.innerText = "0";
    comp.innerText = "0";
    msg.innerText = "Play your Move";
    userScore = 0;
    compScore = 0;
})

const generate = () => {
    let options = ['rock', 'paper', 'scissors',];
    return options[Math.floor(Math.random() * 3)];
}

const bgColorChange = (compchoice) => {
    compchoices.forEach((choice) => {
        let choiceid = choice.getAttribute("id");
        if (compchoice === choiceid) {
            choice.style.backgroundColor = "black";
            setTimeout(() => {
                choice.style.backgroundColor = "beige";
            }, 800);
        } else {
            choice.style.backgroundColor = "beige";
        }
    })
}

const check = () => {
    if (userScore >= limit) {
        msg.innerText = "You Won. Wanna play again!";
    } else if (compScore >= limit) {
        msg.innerText = "Computer Won. Wanna beat Computer?";
    }
}

const showwinner = (win) => {
    if (win) {
        userScore += 1;
        msg.innerText = "You Won!";
        user.innerText = userScore;
    } else {
        compScore += 1;
        msg.innerText = "Computer Won!";
        comp.innerText = compScore;
    }
    check();
}

const play = (userchoice) => {
    if (userScore >= limit || compScore >= limit) {
        alert("Click on start and play!");
    }

    let compchoice = generate();
    bgColorChange(compchoice);
    if (compchoice === userchoice) {
        msg.innerText = "It's Draw!";
    } else {
        let win = true;
        if (userchoice === "rock") {
            win = compchoice === "scissors" ? true : false;
        } else if (userchoice === "paper") {
            win = compchoice === "rock" ? true : false;
        } else if(userchoice === "scissors"){
            win = compchoice === "paper" ? true : false;
        }
        showwinner(win);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let choiceid = choice.getAttribute("id");
        play(choiceid);
    })
})
