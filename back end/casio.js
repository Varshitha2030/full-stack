const num1 = 10;
const num2 = 5;  
const operator = '+'; 

let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = 'Error: Division by zero';
    }
} else {
    result = 'Invalid operator';
}

console.log(`Result: ${result}`);