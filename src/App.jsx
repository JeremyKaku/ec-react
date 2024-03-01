import './App.css';
import React, { useState } from 'react';

function Square({ selected, handleClick }) {
  return (
    <div className={`box ${selected ? 'selected' : ''}`} onClick={handleClick}></div>
  );
}

function Grid() {
  const totalColumns = 3;
  const totalRows = 3;

  const [squares, setSquares] = useState(Array(totalColumns * totalRows).fill(false));

  const handleClick = (index) => {
    const newSquares = [...squares];
    const col = index % totalColumns;

    const adjacentIndices = [
      index - 1,            // Left
      index + 1,            // Right
      index - totalColumns, // Up
      index + totalColumns  // Down
    ];

    if (col === 0) {
      adjacentIndices.shift(); // Remove left adjacent square
    }

    if (col === totalColumns - 1) {
      adjacentIndices.splice(1, 1); // Remove right adjacent square
    }

    newSquares[index] = !newSquares[index];

    adjacentIndices.forEach(adjacentIndex => {
      if (adjacentIndex >= 0 && adjacentIndex < totalRows * totalColumns) {
        newSquares[adjacentIndex] = !newSquares[adjacentIndex];
      }
    });

    setSquares(newSquares);
  };

  return (
    <div className="container">
      {squares.map((selected, index) => (
        <Square
          key={index}
          selected={selected}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Grid />
    </div>
  );
}

export default App;

