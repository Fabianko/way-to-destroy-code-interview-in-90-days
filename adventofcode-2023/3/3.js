/**
 * --- Day 3: Gear Ratios ---
You and the Elf eventually reach a gondola lift station; he says the gondola lift will take you up to the water source, but this is as far as he can bring you. You go inside.

It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.

"Aaah!"

You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.

The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, it should be easy to work out which part is missing.

The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)

Here is an example engine schematic:

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?


const fs = require('fs');
const path = require('path');

function sumPartNumbers(schematic) {
  let sum = 0;
  const rows = schematic.trim().split("\n").map(row => row.split(''));

  function isSymbol(char) {
    return char && !char.match(/[0-9.]/);
  }

  function hasAdjacentSymbol(x, y) {
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) continue;
        let nx = x + dx;
        let ny = y + dy;
        if (nx >= 0 && nx < rows.length && ny >= 0 && ny < rows[nx].length && isSymbol(rows[nx][ny])) {
          return true;
        }
      }
    }
    return false;
  }

  for (let x = 0; x < rows.length; x++) {
    for (let y = 0; y < rows[x].length; y++) {
      if (rows[x][y].match(/[0-9]/)) {
        let numberStr = '';
        let originalY = y;
        while (y < rows[x].length && rows[x][y].match(/[0-9]/)) {
          numberStr += rows[x][y];
          y++;
        }
        y--;
        if (hasAdjacentSymbol(x, originalY) || hasAdjacentSymbol(x, y)) {
          sum += parseInt(numberStr, 10);
        }
      }
    }
  }

  return sum;
}

const filePath = path.join(__dirname, 'input.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(sumPartNumbers(data));
});
 */


const fs = require('fs');
const path = require('path');

function sumGearRatios(schematic) {
  let sum = 0;
  const rows = schematic.trim().split("\n").map(row => row.split(''));

  function isSymbol(char) {
    return char && !char.match(/[0-9.]/);
  }

  function getAdjacentPartNumbers(x, y) {
    const directions = [
      [-1, 0], [1, 0], // arriba, abajo
      [0, -1], [0, 1], // izquierda, derecha
      [-1, -1], [-1, 1], // diagonal arriba
      [1, -1], [1, 1],  // diagonal abajo
    ];
    let partNumbers = [];
    for (const [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;
      let numberStr = '';
      while (nx >= 0 && nx < rows.length && ny >= 0 && ny < rows[nx].length && rows[nx][ny].match(/[0-9]/)) {
        numberStr += rows[nx][ny];
        nx += dx;
        ny += dy;
      }
      if (numberStr) {
        partNumbers.push(parseInt(numberStr, 10));
      }
    }
    return partNumbers;
  }

  for (let x = 0; x < rows.length; x++) {
    for (let y = 0; y < rows[x].length; y++) {
      if (rows[x][y] === '*') {
        let partNumbers = getAdjacentPartNumbers(x, y);
        if (partNumbers.length === 2) {
          sum += partNumbers[0] * partNumbers[1];
        }
      }
    }
  }

  return sum;
}

const filePath = path.join(__dirname, 'input.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(sumGearRatios(data));
});
