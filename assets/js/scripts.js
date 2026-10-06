document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked Submit")
            } else {
                let gametype = this.getAttribute("data-type");
                runGame(gametype)
            }
        })
    }
    runGame("addition");
})

/**
 * the main game loop. creates 2 random numbers between 1 and 24
 */
function runGame(gametype) {
    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1

    if (gametype === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gametype === "subtract") {
        displaySubtractQuestion(num1, num2);
    }else if (gametype === "multiply") {
        displayMultiplyQuestion(num1, num2);
    }else if (gametype === "divsion") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unkown game type: ${gametype}`);
        throw `unknown game type: ${gametype}. Aborting`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "+"
}

function displaySubtractQuestion(operand1,operand2) {
 document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "-"
}

function displayMultiplyQuestion(operand1,operand2) {
 document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "X"
}
function displayDivisionQuestion(operand1,operand2) {
 document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "/"
}