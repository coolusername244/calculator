const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector('h1');
const codeText = document.querySelector('.code-text');
const regexText = document.querySelector('.regex');
const num1Span = document.querySelector('.num1');
const signSpan = document.querySelector('.sign');
const num2Span = document.querySelector('.num2');
function evaluate(sum) {
    const sign = /[+\-*/]/;
    const a = /^\d+(\.\d+)?/;
    const b = /\d+(\.\d+)?$/;
    const sumPattern = /^\d+(\.\d+)?[+\-*/]\d+(\.\d+)?$/;
    if (!sumPattern.test(sum)) {
        return `I can't do that :(`;
    }
    const num1 = Number(sum.match(a)[0]);
    const operator = sum.match(sign)[0];
    const num2 = Number(sum.match(b)[0]);
    if (operator === '/' && num2 === 0) {
        return `I can't do that :(`;
    }
    function sendToDom(num1, operator, num2) {
        num1Span.textContent = `= ${num1.toString()}`;
        signSpan.textContent = `= ${operator}`;
        num2Span.textContent = `= ${num2.toString()}`;
    }
    switch (operator) {
        case '+':
            sendToDom(num1, operator, num2);
            return num1 + num2;
        case '-':
            sendToDom(num1, operator, num2);
            return num1 - num2;
        case '/':
            sendToDom(num1, operator, num2);
            return num1 / num2;
        case '*':
            sendToDom(num1, operator, num2);
            return num1 * num2;
        default:
            return `I can't do that :(`;
    }
}
function updateDisplay(value) {
    // if user presses an operator first - do not allow
    if (calcDisplay.textContent === '0') {
        if (value === '+' ||
            value === '-' ||
            value === '/' ||
            value === '*' ||
            value === '=' ||
            value === 'c') {
            return;
        }
    }
    // if user has cleared the display - change display to 0
    if (value === 'c') {
        calcDisplay.textContent = '0';
        return;
    }
    // if user starts to type numbers, add it to the display
    if (calcDisplay.textContent === '0' && value !== '=') {
        calcDisplay.textContent = '';
        calcDisplay.textContent = value;
        return;
    }
    // if user presses = then do the calculation and update the display
    if (value === '=') {
        const sum = evaluate(calcDisplay.textContent);
        calcDisplay.textContent = sum.toString();
    }
    else {
        calcDisplay.textContent += value;
    }
}
// add updateDisplay function to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.value);
    });
});
//# sourceMappingURL=index.js.map