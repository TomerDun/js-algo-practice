/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition( arr ) {
  // Get the product of all items
  let p = 1;
  // Zero edge case: if there is one zero the asnwer is always false, if there is more then one zero the answer is always true.
  let countZeroes = 0;
  for (let num of arr) {
    if (num === 0) countZeroes ++
    p *= num
  }

  // Check for zeroes
  if (countZeroes === 1) return false;
  else if (countZeroes > 1) return true;

  // No zeroes

  // Check all numbers for partitions
  for (let num of arr) {
    if (p / num === num) return true
  }
  return false;
}

exports.solution = canPartition;