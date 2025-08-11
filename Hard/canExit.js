/*
A maze can be represented by a 2D matrix, where 0s represent walkeable areas, and 1s represent walls. You start on the upper left corner and the exit is on the most lower right cell.

Create a function that returns true if you can walk from one end of the maze to the other. You can only move up, down, left and right. You cannot move diagonally.

Examples
canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0]
]) ➞ true

canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 1, 1]
]) ➞ false

// This maze only has dead ends!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ false

// Exit only one block away, but unreachable!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0]
]) ➞ true
Notes
In a maze of size m x n, you enter at [0, 0] and exit at [m-1, n-1].
There can be dead ends in a maze - one exit path is sufficient.
*/

function pString(pos) {
  return `${pos.x},${pos.y}`;
}

function canExit( mat ) {
  //your code
  const target = {y: mat.length-1, x: mat[0].length-1};
  const visited = new Set();  

  return move(0,0);

  
  function move(x, y) {
    visited.add(pString({x, y}));

    if (mat[y][x] === 1) return false;
    if (x === target.x && y === target.y) return true;

    let moveLeft = false;
    let moveRight = false;
    let moveUp = false;
    let moveDown = false;

    
    if (x > 0 && !visited.has(pString({x: x-1, y}))) {moveLeft = move(x-1, y)}; //Check Left
    if (x < target.x && !visited.has(pString({x: x+1, y}))) {moveRight = move(x+1, y)}; // Check Right

    if (y > 0 && !visited.has(pString({x, y: y-1}))) {moveUp = move(x, y-1)}; // Check Up
    if (y < target.y && !visited.has(pString({x, y: y+1}))) {moveDown = move(x, y+1)}; // Check Up    

    return (moveLeft || moveRight || moveDown || moveUp);
  }
}

exports.solution = canExit;