import React from "react";
import "./App.css";
import { boardSize, createBoard, addMines, copy2DArray } from "./constants";
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

  useEffect(() => {
    setState((s) => {
      return addMines(s);
    });
  }, []);

  return (
    <div className="bg-green-900 h-[100vh] text-white flex flex-col items-center justify-center">
      <div className="grid grid-cols-10 w-[70vmin] h-[70vmin] bg-green-700">
        {state.map((arr, yIndex) =>
          arr.map((obj, xIndex) => <GameCell content={obj} />)
        )}
      </div>
    </div>
  );
}

export default App;
