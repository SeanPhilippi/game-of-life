import React, { useState, useCallback, useRef } from "react";
import { produce } from 'immer';
import "./App.css";

const numRows = 50;
const numCols = 50;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
]
// styles
const s = {
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(${ numCols }, 20px)`,
  },
};

const App: React.FC = () => {
  // initializing grid with calling of useState, destructuring grid and setGrid from the return
  // first value of return is the value of the state, second it the update function
  const [grid, setGrid] = useState(() => { // using callback so this is called only upon initial render
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols).fill(0)));
    };
    return rows;
  });
  // first param for useState is initial value
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(currentGrid => {
      return produce(currentGrid, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              // checking bounds to make sure simulation doesn't spill out of grid
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += currentGrid[newI][newJ];
              }

              if (neighbors < 2 || neighbors > 3) {
                gridCopy[i][j] = 0;
              } else if (!currentGrid[i][j] || neighbors === 3) {
                gridCopy[i][j] = 1;
              }
            })
          }
        }
      });
    });

    setTimeout(runSimulation, 1000);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
          runningRef.current = true;
          runSimulation();
        }}
      >
        { running ? 'stop' : 'start' }
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
