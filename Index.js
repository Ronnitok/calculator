const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the math expression
    } catch (error) {
        display.value = "Error"; // Handle invalid expressions
    }
}
