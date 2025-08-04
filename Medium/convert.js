/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convert( temp ) {
  //your code
  let newTemp;
  const code = temp[temp.length - 1];
  let symbol;
  let originalNumber = temp.split('°')[0];
  originalNumber = parseInt(originalNumber);

  if (code === 'F') {
    newTemp = (originalNumber - 32) * (5/9);
    symbol = 'C'
    
  }
  else if (code === 'C') {
    newTemp = (originalNumber * (9/5)) + 32;
    symbol = 'F'
  }

  else {
    return 'Error';
  }

  newTemp = Math.round(newTemp);

  return `${newTemp}°${symbol}`;
}

exports.solution = convert;