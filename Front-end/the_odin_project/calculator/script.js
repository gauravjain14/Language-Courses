function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Event Delegation. Rather than creating N-event listeners.
const numButton = document.querySelector('.num-button');
numButton.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        console.log(`Button clicked: ${event.target.textContent}`);
    }
});