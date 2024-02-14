import { arrayBuffer } from "stream/consumers";

const boardSize: number = 10;
const mineTotal: number = 2;

function createBoard(cell: object) {
  let newCell = JSON.parse(JSON.stringify(cell));
  const arr = [];
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push(cell);
    }
    arr.push(row);
  }
  return arr;
}

function copy2DArray(array: any) {
  return JSON.parse(JSON.stringify(array));
}

function rng(n: number) {
  return Math.floor(Math.random() * n);
}

function addMines(arr: any) {
  let newArr = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < mineTotal; i++) {
    let bool = false;
    while (!bool) {
      let y = rng(boardSize);
      let x = rng(boardSize);
      console.log(arr[y][x].isMine);
      arr[y][x].isMine = true;
      bool = true;
    }
  }
  return newArr;
}

export { boardSize, createBoard, addMines, copy2DArray };
