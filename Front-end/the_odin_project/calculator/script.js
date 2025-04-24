let result = null;

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
const calcButton = document.querySelector('.calc-button');
calcButton.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {

        // if button is a number, append it to the display
        const display = document.querySelector('#result');
        if (!isNaN(event.target.textContent)) {
            display.value += event.target.textContent;
        } else {
            const operator = event.target.textContent;

            // If the operator is '=', evaluate the expression
            if (operator === '=') {
                try {
                    const result = eval(display.value);
                    display.value = result;
                } catch (error) {
                    display.value = "Error";
                }
            } else if (operator === 'Clear') {
                // Clear the display
                display.value = '';
            } else {
                // Append the operator to the display
                display.value += ` ${operator} `;
            }
        }
    }
});