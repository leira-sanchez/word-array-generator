import { useState } from "react";
import words from "an-array-of-english-words";

export default function App() {
  const [wordList, setList] = useState();
  const [quantity, setQuantity] = useState(25);
  const max = words.length;

  const getIndexes = () => {
    const listOfIndexes = [];
    for (let i = 0; i < quantity; i++) {
      const randomIndex = Math.floor(Math.random() * max);
      listOfIndexes.push(randomIndex);
    }
    return listOfIndexes;
  };

  const getWords = (isSorted = false) => {
    const indexes = getIndexes();
    let list = indexes.map((index) => words[index]);
    if (isSorted) list = list.sort((a, b) => a.localeCompare(b));
    setList(JSON.stringify(list));
    return list;
  };

  return (
    <div style={{ textAlign: "center", width: "100vw" }}>
      <h1>Random English Words Array Generator</h1>
      <label htmlFor="quantity">Word Count </label>
      <input
        name="quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        max={max}
      />
      <button onClick={() => getWords()}>Generate</button>
      <button onClick={() => getWords(true)}>Generate Sorted Array</button>
      {quantity > max ? (
        <p style={{ color: "red" }}>Max number of words is: {max}!</p>
      ) : (
        <p></p>
      )}
      {wordList ? (
        <div
          style={{
            maxWidth: "80vw",
            border: "2px solid black",
            padding: "15px",
            overflowWrap: "break-word",
            margin: "10px auto",
          }}
        >
          <button
            style={{ display: "block" }}
            onClick={navigator.clipboard.writeText(wordList)}
          >
            Copy Array
          </button>
          const array = {wordList}
        </div>
      ) : null}
      <button onClick={navigator.clipboard.writeText(wordList)}>
        Copy Array
      </button>
    </div>
  );
}
