import { arrayBuffer } from "stream/consumers";

const boardSize: number = 10;
const mineTotal: number = 20;
const adjacents: any = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, 0],
  [0, -1],
  [-1, -1],
];

function createBoard(cell: object) {
  let newCell = JSON.parse(JSON.stringify(cell));
  const arr = [];
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push(newCell);
    }
    arr.push(row);
  }
  const newArr = addMines(arr);
  return newArr;
}

function copy2DArray(array: any) {
  return JSON.parse(JSON.stringify(array));
}

function rng(n: number) {
  return Math.floor(Math.random() * n);
}

function addMines(arr: any) {
  const newArr = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < mineTotal; i++) {
    let valid = false;
    let x: number;
    let y: number;
    while (!valid) {
      y = rng(boardSize);
      x = rng(boardSize);
      if (newArr[y][x].isMine === false) {
        newArr[y][x].isMine = true;

        adjacents.forEach((adj: any) => {
          let newY = y + adj[0];
          let newX = x + adj[1];
            

          // console.log(newArr[newY][newX]);
          if (newY < boardSize &&
            newY >= 0 &&
            newX < boardSize &&
            newX >= 0) {
            newArr[newY][newX].adjacentMines += 1;
            console.log(newArr[newY][newX]);
          }
        });

        valid = true;
      }
    }
  }
  return newArr;
}

function incrementAdjacent(arr: any) {
  const newArr = JSON.parse(JSON.stringify(arr));
  newArr.forEach((arr: any, y: number) =>
    arr.forEach((obj: any, x: number) => {})
  );
}

export { boardSize, createBoard, addMines, copy2DArray };
