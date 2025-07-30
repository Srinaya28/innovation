let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /, %)");

let result;

if (operator === '/' && num2 === 0) {
  console.log("Error: Division by zero");
} else {
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      console.log("Invalid operator");
  }

  if (result !== undefined) {
    console.log(`Result: ${result}`);
  }
}
