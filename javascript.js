const container = document.querySelector(".container");
const button = document.querySelector(".calculator-body");

let userInput = {
    a: "0",
    b: "",
    operator: "",
    result: "",
}

function resetUserInput() {
    userInput.a = "0";
    userInput.b = "";
    userInput.operator = "",
    userInput.result = ""
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
    isNumberValid();
    switch (userInput.operator) {
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

function textToOperator(input) {
    switch (input) {
        case ("ac"):
            resetUserInput();
            break;
        case ("modulus"):
            userInput.operator = "%";
            break;
        case ("divide"):
            userInput.operator = "/";
            break;
        case ("multiply"):
            userInput.operator = "*";
            break;
        case ("subtract"):
            userInput.operator = "-";
            break;
        case ("add"):
            userInput.operator = "*";
            break;
        case ("backspace"):
            break;
        case ("period"):
            break;
        case ("brackets"):
            break;
        case ("equal"):
            operator();
    }
}

function doesAnswerExist() {
    return userInput.result !== "";
}

function doesOperatorExist() {
    return userInput.operator !== "";
}

function evaluateExpression(input) {
    if (!input.match("^[0-9]")) {
        // Validate user input later
        textToOperator(input);
    } else {
        if (userInput.operator !== "") {
            userInput.b = userInput.b + input;
        } else {
            if (userInput.a === "0") {
                userInput.a = input;
            } else {
                userInput.a = userInput.a + input;
            }
        }
    }

    updateTextDisplay();
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
        //console.log(child[0].id);
        evaluateExpression(child[0].id);
    }
}



button.addEventListener("mouseover", buttonHoverGrayOut);
button.addEventListener("mouseout", buttonHoverReset);

button.addEventListener("click", identifyButtonPressed)