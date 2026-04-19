const display = document.getElementById("display");

function append(value) {
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}
function clearDisplay() {
    display.innerText = "0";
}
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}
function calculate() {
    try {
        let expression = display.innerText
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/−/g, "-");
        let result = eval(expression);
        display.innerText = Number.isInteger(result) ? result : result.toFixed(2);
    } catch {
        display.innerText = "Error";
    }
}
