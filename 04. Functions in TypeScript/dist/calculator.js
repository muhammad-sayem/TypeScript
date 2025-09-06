"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Can't divide by zero!!");
    }
    return a / b;
};
const power = (base, exponent = 2) => {
    return Math.pow(base, exponent);
};
const calculate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return sum(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "^":
            return power(a, b);
        default:
            throw new Error("Invalid Operator");
    }
};
console.log("Summation:", calculate(20, 10, "+"));
console.log("Subtraction:", calculate(20, 10, "-"));
console.log("Multiplication:", calculate(20, 10, "*"));
console.log("Division:", calculate(20, 10, "/"));
console.log("Power:", calculate(20, 10, "^"));
//# sourceMappingURL=calculator.js.map