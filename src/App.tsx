import React from "react";
import "./App.css";
import { boardSize, createBoard, copy2DArray } from "./constants";
import { useState, useEffect } from "react";
import GameCell from "./GameCell";

type Cell = {
  isMine: boolean;
  isFlagged: boolean;
  isRevealed: boolean;
  adjacentMines: number;
};

const cell1: Cell = {
  isMine: false,
  isFlagged: false,
  isRevealed: false,
  adjacentMines: 0,
};

function App() {
  const [state, setState] = useState(createBoard(cell1));

  function revealCell(y:number, x:number) : any {
    setState((s: any) => {
      const newState = [...s];
      newState[y][x].isFlagged = false;
      newState[y][x].isRevealed = true;
      return newState
    })
  }
  function flagCell(e:any, y:number, x:number) : any {
    (e).preventDefault();
    setState((s: any) => {
      const newState = [...s];
      if (newState[y][x].isRevealed) return newState
      newState[y][x].isFlagged = true;
      return newState
    })
  }

  return (
    <div className="bg-gray-800 h-[100vh] text-white flex flex-col items-center justify-center">
      <div className="grid grid-cols-10 w-[70vmin] h-[70vmin] bg-gray-700">
        {state.map((arr: any, yIndex: any) =>
          arr.map((obj: any, xIndex: any) => <GameCell content={obj} revealCell={revealCell} flagCell={flagCell} yIndex={yIndex} xIndex={xIndex} />)
        )}
      </div>
    </div>
  );
}

export default App;
