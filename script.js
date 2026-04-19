// 🔊 SOUND
const sound = new Audio("assets/click.mp3");

function playSound(){
    sound.currentTime = 0;
    sound.play();
}

// DISPLAY
let display = document.getElementById("display");

// FUNCTIONS
function append(value){
    if(display.innerText === "0"){
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay(){
    display.innerText = "0";
}

function deleteLast(){
    display.innerText = display.innerText.slice(0, -1);

    if(display.innerText === ""){
        display.innerText = "0";
    }
}

function calculate(){
    try{
        display.innerText = eval(display.innerText);
    } catch{
        display.innerText = "Error";
    }
}