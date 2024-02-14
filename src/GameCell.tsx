interface GameCellProps {
    content: any; // Change 'any' to the specific type of obj if possible
  }
  
  const GameCell: React.FC<GameCellProps> = ({content}) => {
  
  
    return (
      <div className="bg-gray-500 border">
        {content.isMine && 0}
      </div>
    )
  }
  
  export default GameCell;