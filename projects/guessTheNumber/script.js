let random = parseInt((Math.random() * 100) + 1)
const guessField = document.getElementById("guessField");
const subt = document.getElementById("subt");
const result = document.getElementById("result");
const lowOrHi = document.querySelector(".lowOrHi");
const prevGuess = document.querySelector(".guesses")
const guessRemaining = document.querySelector(".lastResult")
const startOver=document.querySelector(".resultParas");
const p=document.createElement('p');
let count = 10
const preGue = []
let game = true;
if (game) {
    subt.addEventListener('click', function (e) {
        e.preventDefault();

        const userInput = guessField.value;
        isValidnum(userInput);

    })

}

function isValidnum(value) {
    if (isNaN(value)) {
        alert("please enter valid number");
    }
    else if (value > 100) {
        alert("please enter less less than 100");
    }
    else if (value < 1) {
        alert("please enter number grater than 1");
    }
    choseCorrectNum(value);
}

function choseCorrectNum(value) {
    if (value == random) {
        lowOrHi.innerHTML = "yes ,this is write number";
        lowOrHi.style.color = "yellow";
        lowOrHi.style.fontSize=20+"px"
    }
    else if (value > random) {
        lowOrHi.innerHTML = "number is too high";

    }
    else if (value < random) {
        lowOrHi.innerHTML = "number is too low";


    }
    previousGuess(value);
    remainingGame();
     guessField.value=" "

}
function previousGuess(value) {
    preGue.push(value);
    prevGuess.innerHTML = `${preGue} ,`
}

function remainingGame() {
    count--
    guessRemaining.innerHTML = count;
    if(count==0){
        lowOrHi.innerHTML ="game is over "

        endGame();

    }
}
function endGame(){
    count=10
    guessField.setAttribute('disabled'," ")
    p.classList.add('button');
    p.innerHTML=`<h1 id="newGame">Stsrt game<h1>`;
    startOver.appendChild(p);
    playGame=false
    newGame();

}


function newGame(){
    const newGameBtn=document.getElementById("newGame");
 newGameBtn.addEventListener('click',function(e){
   e.preventDefault();
   let random = parseInt((Math.random() * 100) + 1)
    preGue = []
    playGame=true
    guessSlot.innerHTML = '';
    guessField.removeAttribute('disabled');
    startOver.removeChild(p);
 })
 
    game=true;
}