
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

    // math.evaluate avalia expressões matemáticas de forma segura
    let y = math.evaluate(display.value);
    display.value = y;

    if (display.value == "undefined") {
        display.value = ""
    }
}