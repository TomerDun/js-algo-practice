/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(str) {
  function getAsciiDiff(c1, c2) {
    return str.charCodeAt(c2) - str.charCodeAt(c1)
  }

  if (str.length < 2) return 'No Missing Letter';

  for (let i = 1; i < str.length; i++) {
    const diff = getAsciiDiff(i-1, i);
    if (diff !== 1) {
      return String.fromCharCode((str.charCodeAt(i-1) + 1));
    }
  }

  return 'No Missing Letter';
}

exports.solution = missingLetter;