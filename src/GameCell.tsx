interface GameCellProps {
  content: any;
  revealCell: any;
  flagCell: any;
  yIndex: number;
  xIndex: number;
}

const GameCell: React.FC<GameCellProps> = ({ content, revealCell, xIndex, yIndex, flagCell }) => {
  return (
    <button
      onClick={() => revealCell(yIndex, xIndex)}
      className="bg-gray-500 border flex justify-center items-center"
      onContextMenu={(e) => flagCell(e, yIndex, xIndex)}    
    >
      {content.isRevealed && !content.isMine && content.adjacentMines}
      {content.isRevealed && content.isMine && (
        <div className="w-3/5 h-3/5 bg-red-800 rounded-full"></div>
      )}
      {content.isFlagged && (
        <div className="w-3/5 h-3/5 bg-orange-500 rounded-full"></div>
      )}
      {!content.isFlagged && !content.isRevealed && <p className="text-gray-500">A</p>}
    </button>
  );
};

export default GameCell;
