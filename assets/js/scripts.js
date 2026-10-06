document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked Submit")
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`You clicked ${gametype}`)
            }
        })
    }
})

/**
 * the main game loop. creates 2 random numbers between 1 and 24
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}