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
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        default:
            return `I can't do that :(`;
    }
}
const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector('h1');
const codeText = document.querySelector('.code-text');
const regexText = document.querySelector('.regex');
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
        regexText.classList.remove('hide');
        codeText.textContent = calcDisplay.textContent;
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
    console.log(calcDisplay);
    codeText.textContent = calcDisplay.textContent;
}
// add updateDisplay function to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.value);
    });
});
//# sourceMappingURL=index.js.map