import "./App.css";
import { useState, useEffect } from "react";
import { Board } from "./components/Board/Board";

const emojiList = [..."💀👻🤡🤑🤳👀🧠👶"];

function App() {
  const [memoBlockSniped, setMemoBlockSniped] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);

  useEffect(() => {
    const snipedEmojiList = snipedList([...emojiList, ...emojiList]);
    setMemoBlockSniped(
      snipedEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false }))
    );
  }, []);

  const snipedList = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
      console.log(a);
    }
    return a;
  };
  const handleMemoClick = (memoBlock) => {
    const MemoBlockInterted = { ...memoBlock, flipped: true };
    let memoblockesnipedcopy = [...memoBlockSniped];
    memoblockesnipedcopy.splice(memoBlock.index, 1, MemoBlockInterted);
    setMemoBlockSniped(memoblockesnipedcopy);

    if (selectedMemoBlock === null) {
      setSelectedMemoBlock(memoBlock);

    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setSelectedMemoBlock(null);
    } else { 
      setAnimating(true);
      setTimeout(() => {
        memoblockesnipedcopy.splice(memoBlock.index, 1, memoBlock);
        memoblockesnipedcopy.splice(
          selectedMemoBlock.index,
          1,
          selectedMemoBlock
        );
        setMemoBlockSniped(memoblockesnipedcopy);
        setSelectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  };
  return (
    <div>
      <Board memoBlocks={memoBlockSniped} handleMemoClick={handleMemoClick} animating={animating}/>
    </div>
  );
}

export default App;
