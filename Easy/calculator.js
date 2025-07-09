/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(x, op, y) {
  if (op === '+') return x + y;
  else if (op === '-') return x - y;
  else if (op === '*') return x * y;
  else { // Divide
    if (y === 0) return "Can't divide by 0!"
    else return x / y;
  }
}

exports.solution = calculator;