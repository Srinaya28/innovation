let choice;
do {
  choice = prompt(`Choose an operation:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit`);

  let num1, num2;

  if (choice !== '5') {
    num1 = parseFloat(prompt("Enter first number:"));
    num2 = parseFloat(prompt("Enter second number:"));
  }

  switch (choice) {
    case '1':
      console.log("Sum:", num1 + num2);
      break;
    case '2':
      console.log("Difference:", num1 - num2);
      break;
    case '3':
      console.log("Product:", num1 * num2);
      break;
    case '4':
      if (num2 === 0) {
        console.log("Division by zero is not allowed.");
      } else {
        console.log("Quotient:", num1 / num2);
      }
      break;
    case '5':
      console.log("Exiting program.");
      break;
    default:
      console.log("Invalid choice.");
  }
} while (choice !== '5');
