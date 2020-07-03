// Practice Random Numbers

// DOM Elements
let outputEl = document.getElementById('output');

// Event Listener
document.getElementById('random-btn').addEventListener('click', randomNumber);

// Event Function
function randomNumber() {
    // Get Menu Selection
    let selection = document.getElementById('num-option').value;

    // Take action based on Menu Selection
    if (selection == 'dec0to1') {
        outputEl.innerHTML = Math.random();
    } else if (selection == 'dec0to50') {
        outputEl.innerHTML = randomDec(0, 50);
    } else if (selection == 'dec-10to10') {
        outputEl.innerHTML = randomDec(-10, 10);
    } else if (selection == 'int0to5') {
        outputEl.innerHTML = randomInt(0, 5);
    } else if (selection == 'int1to11') {
        outputEl.innerHTML = randomInt(1, 11);
    }
}