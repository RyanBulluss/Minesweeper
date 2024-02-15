interface GameCellProps {
  content: any; // Change 'any' to the specific type of obj if possible
}

const GameCell: React.FC<GameCellProps> = ({ content }) => {
  return (
    <div className="bg-gray-500 border flex justify-center items-center">
      {!content.isMine && content.adjacentMines}
      {content.isMine && (
        <div className="w-3/5 h-3/5 bg-red-500 rounded-full"></div>
      )}
    </div>
  );
};

export default GameCell;
