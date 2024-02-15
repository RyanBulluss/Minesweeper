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
  const [playing, setPlaying] = useState(true);
  const [message, setMessage] = useState("Find those mines!");

  function revealCell(y: number, x: number): any {
    if (!playing) return;
    setState((s: any) => {
      const newState = [...s];
      // if (newState[y][x].isMine) {
      //   setPlaying(false)
      //   setMessage("YOU DIED DUMBASS!")
      // }
      newState[y][x].isFlagged = false;
      newState[y][x].isRevealed = true;
      if (checkWin(newState)) {
        setPlaying(false)
        setMessage("YOU WIN!!!")
      };
      return newState;
    });
  }
  function flagCell(e: any, y: number, x: number): any {
    e.preventDefault();
    if (!playing) return;
    setState((s: any) => {
      const newState = JSON.parse(JSON.stringify(s));
      if (newState[y][x].isRevealed) return newState;
      if (newState[y][x].isFlagged) {
        newState[y][x].isFlagged = false;
      } else {
        newState[y][x].isFlagged = true;
      }
      return newState;
    });
  }

  function checkWin(newState: any) {
    let win = true;
    newState.forEach((arr: any) =>
      arr.forEach((obj: any) => {
        if (!obj.isMine && !obj.isRevealed) {
          win = false;
        }
      })
    );
    return win;
  }

  function restartGame() {
    setState(createBoard(cell1));
    setPlaying(true);
    setMessage("Find those mines!");
  }

  return (
    <div className="bg-gray-800 h-[100vh] text-white flex flex-col items-center justify-center gap-8">
      <h2 className="text-2xl">{message}</h2>
      <div className="grid grid-cols-10 w-[70vmin] h-[70vmin] bg-gray-700">
        {state.map((arr: any, yIndex: any) =>
          arr.map((obj: any, xIndex: any) => (
            <GameCell
              content={obj}
              revealCell={revealCell}
              flagCell={flagCell}
              yIndex={yIndex}
              xIndex={xIndex}
            />
          ))
        )}
      </div>
      <button
        onClick={() => restartGame()}
        className="p-2 bg-red-600 hover:bg-red-700 rounded-xl"
      >
        Restart Game
      </button>
    </div>
  );
}

export default App;
