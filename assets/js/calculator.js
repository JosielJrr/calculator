
var display = document.getElementById('display');

function showDisplay(value) {
    if (value == ".") {
        display.value = "0";
    }
    display.value += value;
}

function clearAll() {
    display.value = ""
}

function result() {
    // eval () avalia e executa código, incluindo expressões aritméticas passadas como strings.
    let y = eval(display.value);
    display.value = y;

    if (display.value == "undefined") {
        display.value = ""
    }
}