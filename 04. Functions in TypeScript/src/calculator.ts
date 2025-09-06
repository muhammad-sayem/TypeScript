function sum (a: number, b: number): number {
  return a+b;
}

const subtract = (a: number, b: number): number => {
  return a-b;
}

const multiply = (a: number, b: number): number => {
  return a*b;
}

const divide = (a: number, b: number): number => {
  if(b === 0){
    throw new Error("Can't divide by zero!!")
  }
  return a/b;
}

const power = (base: number, exponent: number = 2): number => {
  return Math.pow(base, exponent)
}

const calculate = (a: number, b: number, operator: string) => {
  switch(operator){
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
      throw new Error("Invalid Operator")
  }
}

console.log("Summation:", calculate(20, 10, "+"));
console.log("Subtraction:", calculate(20, 10, "-"));
console.log("Multiplication:", calculate(20, 10, "*"));
console.log("Division:", calculate(20, 10, "/"));
console.log("Power:", calculate(20, 10, "^"));