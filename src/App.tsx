import React, { useState } from "react";
import { produce } from 'immer';
import "./App.css";

const numRows = 50;
const numCols = 50;
// styles
const s = {
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(${ numCols }, 20px)`,
  },
};

const App: React.FC = () => {
  // initializing gride with calling of useState, destructuring grid and setGrid from the return
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols).fill(0)));
    };
    return rows;
  });
  // defaults to false
  const [running, setRunning] = useState(false);

  return (
    <>
      <button
        onClick={ () => setRunning(!running) }
      >
        { running ? 'start' : 'stop' }
      </button>
      <div style={ s.grid }>
        {
          grid.map((row, i) =>
            row.map((col, j) => <div
              key={`${ i }-${ j }`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][j] ? 'maroon' : undefined, // if 0, maroon, if 1, undefined.  not null due to TS
                border: 'solid 1px teal'
              }}/>
            )
          )
        }
      </div>
    </>
  );
};

export default App;
