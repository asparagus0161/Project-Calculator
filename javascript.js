const container = document.querySelector(".container");
const button = document.querySelector(".calculator-body");

let userInput = {
    a: "0",
    b: "",
    operator: "",
    result: "",
}

function isNumberValid() {
    if (userInput.b === "") {
        userInput.b = userInput.a;
    }
}

function add() {
    userInput.result = parseInt(userInput.a) + parseInt(userInput.b);
}

function subtract() {
    userInput.result = parseInt(userInput.a) - parseInt(userInput.b);
}

function multiply() {
    userInput.result = parseInt(userInput.a) * parseInt(userInput.b);
}

function divide() {
    userInput.result = parseInt(userInput.a) / parseInt(userInput.b);
}

function noInput() {
    userInput.result = userInput.a;
}

function operator() {
    switch (operator) {
        case ("+"):
            add();
            break;
        case ("-"):
            subtract();
            break;
        case ("*"):
            multiply();
            break;
        case ("/"):
            divide();
            break;
        default:
            noInput();
    }
}

function doesAnswerExist() {
    return userInput.result !== "";
}

function doesOperatorExist() {
    return userInput.operator !== "";
}

function validateUserInput(input) {
    if (input.match("^[0-9]")) {
        console.log("is number");
    }

}

function updateTextDisplay() {
    const calculatorTextDisplay = document.querySelector("#calculator-display-text");
    if (doesAnswerExist()) {
        calculatorTextDisplay.textContent = userInput.result;
    } else {
        if (doesOperatorExist()) {
            calculatorTextDisplay.textContent = userInput.a + " " + userInput.operator + " " + userInput.b;
        } else {
            calculatorTextDisplay.textContent = userInput.a;
        }
    }
}

updateTextDisplay();

function buttonHoverGrayOut(e) {
    const liElement = e.target.closest('li');
    if (liElement && liElement.classList.contains('button')) {
        liElement.style.background = "#b9aaaa";
    }
}

function buttonHoverReset(e) {
    const liElement = e.target.closest('li');
    if (liElement && liElement.classList.contains('button')) {
        liElement.style.background = ""; // Reset to default or original color
    }
}

function identifyButtonPressed(e) {
    const liElement = e.target.closest('li');
    if (liElement) {
        const childElements = liElement.querySelectorAll('*');
        const child = Array.from(childElements);
        console.log(child[0].id);
        validateUserInput(child[0].id);
    }
}



button.addEventListener("mouseover", buttonHoverGrayOut);
button.addEventListener("mouseout", buttonHoverReset);

button.addEventListener("click", identifyButtonPressed)