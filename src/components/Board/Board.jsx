import { Memoblock } from "../Memoblock/Memoblock";
import "./Board.css"

export function Board({animating, handleMemoClick, memoBlocks }) {
  return (
    <main className="board">
      {memoBlocks.map((item, index) => {
        return (
            <Memoblock key={`${index}_${item.emoji}`} memoBlock={item} animating={animating} handleMemoClick={handleMemoClick}/>
        );
      })}
    </main>
  );
}
