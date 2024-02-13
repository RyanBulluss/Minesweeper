import React from 'react';
import './App.css';
import { boardSize, createBoard } from './constants';

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
  createBoard(cell1) 
  return (
    <div className='bg-gray-700 h-[100vh]' > 
      
    </div>
  );
}

export default App;
