// All things of main menu start from here
const f = new FontFace("Miltown", "url(Miltown.ttf)", {});
f.load().then(function (loadedFace) {
  document.fonts.add(loadedFace);
});

const body = document.getElementById("body");
body.style.backgroundImage = "url(./background.jpg)";
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "1536px 754px"
body.style.color = "white";
body.style.textAlign = "center";
body.style.fontFamily = "Miltown";


const h1 = document.createElement("h1");
h1.textContent = "GUESS A NUMBER BY BYNARY SEARCH";
body.appendChild(h1);

const menu = document.createElement("div")
body.appendChild(menu);

const s = document.createElement("h2");
s.textContent = "SETTINGS";
menu.appendChild(s);

const settings = document.createElement("div");
settings.style.fontSize = "14pt";
settings.style.padding = "10px"
menu.appendChild(settings);

settings.insertAdjacentHTML('afterbegin', 'FILL THIS INPUTS: FROM NUMBER, TO NUMBER AND NUMBER OF TRIES.<br>');

const numMin = document.createElement("input");
numMin.type = "number";
numMin.style.width = "40px";
numMin.style.marginLeft = "5px";
numMin.style.backgroundColor = "transparent";
numMin.style.outline = "none";
numMin.style.color = "white";
numMin.style.fontFamily = "inherit";
numMin.style.border = "2px solid #fff";
numMin.value = 1;
numMin.min = 1;
numMin.max = 99;
numMin.style.marginTop = "10px"

const numMax = document.createElement("input");
numMax.type = "number";
numMax.style.width = "40px";
numMax.style.marginLeft = "5px";
numMax.style.backgroundColor = "transparent";
numMax.style.outline = "none";
numMax.style.color = "white";
numMax.style.fontFamily = "inherit";
numMax.style.border = "2px solid #fff";
numMax.value = 100;
numMax.min = 2;
numMax.max = 100;
numMax.style.marginTop = "10px"

const trials = document.createElement("input")
trials.type = "number";
trials.style.width = "40px";
trials.style.marginLeft = "5px";
trials.style.backgroundColor = "transparent";
trials.style.outline = "none";
trials.style.color = "white";
trials.style.fontFamily = "inherit";
trials.style.border = "2px solid #fff";
trials.value = 10;
trials.min = 1;
trials.max = 10;
trials.style.marginTop = "10px"

settings.appendChild(numMin)
settings.appendChild(numMax)
settings.appendChild(trials)

const m = document.createElement("h2");
m.textContent = "GAME MODE"
menu.appendChild(m);

const mode = document.createElement("div");
mode.style.height = "460px";
mode.style.backgroundImage = "url(./pills.png)";
mode.style.backgroundRepeat = "no-repeat";
mode.style.backgroundPosition = "center 35px";
mode.style.fontSize = "18pt"
mode.textContent = "WHO WILL GUESS A NUMBER?"

const buttons = document.createElement("div");

const error = document.createElement("div");
error.style.marginTop = "215px";
error.style.opacity = "0";
error.innerHTML = "INCORRECT SETTINGS!";

// buttons for player mode and comp mode
const btn1 = document.createElement("button");
btn1.style.width = "175px";
btn1.style.height = "120px";
btn1.style.backgroundColor = "transparent";
btn1.style.outline = "none";
btn1.style.fontFamily = "inherit";
btn1.style.marginTop = "65px";
btn1.style.marginRight = "190px";
btn1.style.color = "red";
btn1.style.fontSize = "24pt"
btn1.style.border = "3px solid red";
btn1.textContent = "PLAYER";
btn1.style.opacity = "0";

const btn2 = document.createElement("button");
btn2.style.width = "175px";
btn2.style.height = "120px";
btn2.style.backgroundColor = "transparent";
btn2.style.outline = "none";
btn2.style.fontFamily = "inherit";
btn2.style.marginTop = "65px";
btn2.style.color = "blue";
btn2.style.fontSize = "18pt"
btn2.style.border = "3px solid blue";
btn2.textContent = "COMPUTER";
btn2.style.opacity = "0";

btn1.onmouseover = function(){
    btn1.style.opacity = "1";
 }
btn1.onmouseout = function(){
    btn1.style.opacity = "0";
 }
 btn2.onmouseover = function(){
    btn2.style.opacity = "1";
}
btn2.onmouseout = function(){
    btn2.style.opacity = "0";
}

buttons.appendChild(error)
buttons.appendChild(btn1)
buttons.appendChild(btn2)
mode.appendChild(buttons)
menu.appendChild(mode)

btn1.addEventListener('click',function() {
    let tr = Number(trials.value);
    let num1 = Number(numMin.value);
    let num2 = Number(numMax.value);
    if (tr < 1 || parseInt(tr) != tr || tr > 10){
        error.innerHTML = "NUMBER OF TRIALS ONLY FROM 1 TO 10!";
        error.style.opacity = "1";
        }
        else if (num2 == "" || num1 == "" || tr == ""){
        error.innerHTML = "YOU FORGOT ABOUT SETTINGS!";
        error.style.opacity = "1";
        }
        else if (num2 < num1 || parseInt(num2) != num2 || parseInt(num1) != num1 || num1 < 0 || num2 < 0 || num2 > 100) {
        error.innerHTML = "SOMETHING WRONG WITH SETTINGS!";
        error.style.opacity = "1";
            }
        else {
        menu.style.display = "none";
        compNum.style.display = "block";
}
});

btn2.addEventListener('click',function() { 
    let tr = Number(trials.value);
    let num1 = Number(numMin.value);
    let num2 = Number(numMax.value);  
    if (tr < 1 || parseInt(tr) != tr || tr > 10){
        error.innerHTML = "NUMBER OF TRIES ONLY FROM 1 TO 10!";
        error.style.opacity = "1";
        }
    else if (num2 == "" || num1 == "" || tr == ""){
        error.innerHTML = "YOU FORGOT ABOUT SETTINGS!";
        error.style.opacity = "1";
        }
    else if (num2 < num1 || parseInt(num2) != num2 || parseInt(num1) != num1 || num1 < 0 || num2 < 0 || num2 > 100) {
        error.innerHTML = "SOMETHING WRONG WITH SETTINGS!";
        error.style.opacity = "1";
            }
    else {
        menu.style.display = "none";
        playerNum.style.display = "block";
    }
});

//player mode

const compNum = document.createElement("div")
compNum.style.display = "none"
body.appendChild(compNum)

const comp = document.createElement("h2");
comp.textContent = "COMPUTER'S NUMBER";
compNum.appendChild(comp);

const start = document.createElement("div")
start.textContent = "PRESS THE BUTTON TO START THE GAME!"

const br = document.createElement("br")

const startBtn = document.createElement("button")
startBtn.style.width = "300px";
startBtn.style.height = "100px";
startBtn.style.backgroundColor = "transparent";
startBtn.style.fontFamily = "inherit";
startBtn.style.color = "white";
startBtn.style.fontSize = "24pt"
startBtn.style.border = "3px solid red";
startBtn.textContent = "START";
startBtn.style.opacity = "1";
startBtn.style.margin = "10px";
startBtn.style.outline = "none"

startBtn.onmouseover = function(){
    startBtn.style.backgroundImage = "url(./start.gif)";
}
startBtn.onmouseout = function(){
    startBtn.style.backgroundImage = "none";
}

const playField = document.createElement("div");
playField.style.backgroundImage = "url(./smith.png)";
playField.style.backgroundSize = "300px"
playField.style.backgroundRepeat = "no-repeat";
playField.style.backgroundPosition = "right 30px";
playField.style.height = "450px";

const playDiv = document.createElement("div");
playDiv.style.fontSize = "24pt";
playDiv.style.opacity = "0";
playDiv.innerHTML = "COMPUTER CHOSE A NUMBER! LET'S GUESS IT!";

const inputGuess = document.createElement("input");
inputGuess.type = "number";
inputGuess.style.backgroundColor = "transparent";
inputGuess.style.fontFamily = "inherit";
inputGuess.style.color = "white";
inputGuess.style.border = "3px solid red";
inputGuess.style.outline = "none"
inputGuess.style.opacity = "0";
inputGuess.style.width = "300px";
inputGuess.style.height = "100px";
inputGuess.style.fontSize = "34pt";
inputGuess.style.margin = "15px";

inputGuess.onmouseover = function(){
    inputGuess.style.backgroundImage = "url(./start.gif)";
}
inputGuess.onmouseout = function(){
    inputGuess.style.backgroundImage = "none";
}

const result = document.createElement("div");
result.style.fontSize = "34pt";
result.style.margin = "15px";

compNum.appendChild(start)
start.appendChild(br)
start.appendChild(startBtn)
compNum.appendChild(playField)
playField.appendChild(playDiv)
playField.appendChild(inputGuess)
playField.appendChild(result)

  let computerNumber = 0;
  let count = 0

startBtn.addEventListener('click',function() {
    let num1 = Number(numMin.value);
    let num2 = Number(numMax.value);
    start.style.opacity = "0";
    playDiv.style.opacity = "1";
    inputGuess.style.opacity = "1";
    computerNumber = randomInteger(num1, num2);
    console.log(computerNumber);
});

inputGuess.addEventListener('keydown', function(event){
    if (event.key == "Enter"){
        plnum = Number(inputGuess.value);
        let tr = Number(trials.value);
        let num1 = Number(numMin.value);
        let num2 = Number(numMax.value);
        if (plnum == "") {
            result.style.opacity = "1";
            result.innerHTML = "CHOOSE A NUMBER RIGHT NOW!"
            }   else if (plnum < num1 || plnum > num2 || parseInt(plnum) != plnum ) {
                result.style.opacity = "1";
                result.innerHTML = "YOU HAVE TO PICK NUMBER FROM "+num1+" TO "+num2}
                else if (plnum < computerNumber) {
                    result.style.opacity = "1";
                    inputGuess.value = "";
                    result.innerHTML = "COMPUTER'S NUMBER BIGGER THAN THAT";
                }
                else if (plnum > computerNumber){ 
                    result.style.opacity = "1";
                    inputGuess.value = "";
                    result.innerHTML = "COMPUTER'S NUMBER SMALLER THAN THAT";
                }
                else if (plnum = computerNumber) {
                playDiv.innerHTML = "PlAYER FINALLY GUESSED A NUMBER!";
                result.style.opacity = "1";
                result.innerHTML = "JUST WAIT A LITTLE BIT FOR A NEW GAME";
                inputGuess.style.display = "none";
                setTimeout(init, 3000)
            }
            if (count++ == (tr-1) && plnum != computerNumber) {
                playDiv.innerHTML = "0 TRIES LEFT.PLAYER LOST!";
                result.style.opacity = "1";
                result.innerHTML = "JUST WAIT A LITTLE BIT FOR A NEW GAME";
                inputGuess.style.display = "none";
                setTimeout(init, 3000)
            }
            }});

//computer mode
const playerNum = document.createElement("div")
playerNum.style.display = "none"
body.appendChild(playerNum)

const player = document.createElement("h2");
player.textContent = "PLAYER'S NUMBER";
playerNum.appendChild(player);

const start2 = document.createElement("div")
start2.textContent = "WRITE A NUMBER AND PRESS 'ENTER' TO START THE GAME!"

const br2 = document.createElement("br")

const startInput = document.createElement("input")
startInput.type = "number";
startInput.style.width = "300px";
startInput.style.height = "100px";
startInput.style.backgroundColor = "transparent";
startInput.style.fontFamily = "inherit";
startInput.style.color = "white";
startInput.style.fontSize = "34pt"
startInput.style.border = "3px solid blue";
startInput.style.opacity = "1";
startInput.style.margin = "10px";
startInput.style.outline = "none"

const result1 = document.createElement("div");
result1.style.fontSize = "34pt";
result1.style.margin = "10px";
result.style.opacity = "0";
result.innerHTML = "0";

const playField2 = document.createElement("div");
playField2.style.backgroundImage = "url(./neo.png)";
playField2.style.backgroundSize = "280px"
playField2.style.backgroundRepeat = "no-repeat";
playField2.style.backgroundPosition = "left";
playField2.style.height = "450px";

const playDiv2 = document.createElement("div");
playDiv2.style.fontSize = "24pt";
playDiv2.style.opacity = "0";
playDiv2.innerText = "PLAYER CHOSE A NUMBER! COMPUTER STARTED THINKING...";

const compBtnDiv = document.createElement("div")
compBtnDiv.style.opacity = "0";

const compBtn = document.createElement("button")
compBtn.style.width = "300px";
compBtn.style.height = "100px";
compBtn.style.backgroundColor = "transparent";
compBtn.style.fontFamily = "inherit";
compBtn.style.color = "white";
compBtn.style.fontSize = "24pt"
compBtn.style.border = "3px solid blue";
compBtn.textContent = "COMPUTER MOVE";
compBtn.style.margin = "10px";
compBtn.style.outline = "none";

const buttonsCheck = document.createElement("div")
buttonsCheck.style.opacity = "0";
buttonsCheck.style.fontSize = "24pt";
buttonsCheck.innerText = "THIS NUMBER BIGGER OR SMOLLER THAN YOURS?";

const br3 = document.createElement("br")

const moreBtn = document.createElement("button");
moreBtn.style.width = "150px";
moreBtn.style.height = "50px";
moreBtn.style.backgroundColor = "transparent";
moreBtn.style.fontFamily = "inherit";
moreBtn.style.color = "white";
moreBtn.style.fontSize = "15pt"
moreBtn.style.border = "3px solid blue";
moreBtn.textContent = "BIGGER";
moreBtn.style.margin = "10px";
moreBtn.style.outline = "none";

const lessBtn = document.createElement("button");
lessBtn.style.width = "150px";
lessBtn.style.height = "50px";
lessBtn.style.backgroundColor = "transparent";
lessBtn.style.fontFamily = "inherit";
lessBtn.style.color = "white";
lessBtn.style.fontSize = "15pt"
lessBtn.style.border = "3px solid blue";
lessBtn.textContent = "SMALLER";
lessBtn.style.margin = "10px";
lessBtn.style.outline = "none";

playerNum.appendChild(start2)
start2.appendChild(br2)
start2.appendChild(startInput)
playerNum.appendChild(playField2)
playField2.appendChild(playDiv2)
playField2.appendChild(compBtnDiv)
compBtnDiv.appendChild(compBtn)
playField2.appendChild(result1)
playField2.appendChild(buttonsCheck)
buttonsCheck.appendChild(br3);
buttonsCheck.appendChild(lessBtn)
buttonsCheck.appendChild(moreBtn)

startInput.addEventListener('keydown', function(event){
    if (event.key == "Enter"){
        numForComp= parseFloat(startInput.value);
        if (numForComp == "") {
            result1.style.opacity = "1";
            result1.innerHTML = "CHOOSE A NUMBER RIGHT NOW!"
            } else if (numForComp < numMin.value || numForComp > numMax.value || parseInt(numForComp) != numForComp || numForComp < 0) {
                result1.style.opacity = "1";
                result1.innerHTML = "THIS NUMBER DOESN'T MATCH THE SETTINGS!"}
                else {
                    start2.style.opacity = "0";
                    playDiv2.style.opacity = "1";
                    compBtnDiv.style.opacity = "1";
                    result1.style.opacity = "0";
                }
            }});

startInput.onmouseover = function(){
    startInput.style.backgroundImage = "url(./start.gif)";
}
startInput.onmouseout = function(){
    startInput.style.backgroundImage = "none";
}

let num1 = Number(numMin.value);
let num2 = Number(numMax.value);
let numComputer = 0;

compBtn.addEventListener('click',function() {
    numPlayer = parseFloat(startInput.value);
    numComputer = computerGuessing(num1, num2);
    console.log(numComputer);
    console.log(numPlayer);
    if ((num1 + 1 == numPlayer && num2 == numPlayer) || (num1 == numPlayer && num2 - 1 == numPlayer)) {
        playDiv2.innerText = "COMPUTER THINK YOUR NUMBER WAS "+numPlayer+"!";
        buttonsCheck.style.opacity = "0";
        result1.innerText = "JUST WAIT A LITTLE BIT FOR A NEW GAME";
        result1.style.fontSize = "24pt";
        result1.style.opacity = "1";
        compBtnDiv.style.display = "none";
        setTimeout(init, 5000)
        }
        else if (numComputer != numPlayer) {
        result1.innerText = numComputer;
        buttonsCheck.style.opacity = "1";
        compBtnDiv.style.opacity = "0";
        result1.style.opacity = "1";
        }
        else {
            playDiv2.innerText = "COMPUTER THINK YOUR NUMBER WAS "+numComputer+"!";
            buttonsCheck.style.opacity = "0";
            result1.innerText = "JUST WAIT A LITTLE BIT FOR A NEW GAME";
            result1.style.fontSize = "24pt";
            result1.style.opacity = "1";
            compBtnDiv.style.display = "none";
            setTimeout(init, 5000)
        }
});

lessBtn.addEventListener('click', function(){
    num2 = numComputer - 1
    compBtnDiv.style.opacity = "1";
    buttonsCheck.style.opacity = "0";
});

moreBtn.addEventListener('click', function(){
    num1 = numComputer;
    compBtnDiv.style.opacity = "1"
    buttonsCheck.style.opacity = "0";
});

compBtn.onmouseover = function(){
    compBtn.style.backgroundImage = "url(./start.gif)";
}
compBtn.onmouseout = function(){
    compBtn.style.backgroundImage = "none";
}

moreBtn.onmouseover = function(){
    moreBtn.style.backgroundImage = "url(./start.gif)";
}
moreBtn.onmouseout = function(){
    moreBtn.style.backgroundImage = "none";
}
lessBtn.onmouseover = function(){
    lessBtn.style.backgroundImage = "url(./start.gif)";
    }
lessBtn.onmouseout = function(){
        lessBtn.style.backgroundImage = "none";
    }

// All functions
function computerGuessing(min, max) {
    let number = (max - min + 1)/2 + min - 1;
    return Math.ceil(number)
}
function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

function init() {
computerNumber = 0; 
menu.style.display = "block";
compNum.style.display = "none";
start.style.opacity = "1";
playDiv.style.opacity = "0";
inputGuess.style.opacity = "0";
result.style.opacity = "0";
inputGuess.value = "";
inputGuess.style.display = "inline";
playDiv.innerHTML = "COMPUTER CHOSE A NUMBER! LET'S GUESS IT!";
numMax.value = 100;
numMin.value = 1;
trials.value = 10;
start2.style.opacity = "1";
startInput.value = "";
result1.innerText = "";
result1.style.opacity = "0";
playerNum.style.display = "none";
playDiv2.innerText = "PLAYER CHOSE A NUMBER! COMPUTER STARTED THINKING...";
playDiv2.style.opacity = "0";
compBtnDiv.style.display = "block";
compBtnDiv.style.opacity = "0";
numComputer = 0;
num1 = Number(numMin.value);
num2 = Number(numMax.value);
count = 0;
}