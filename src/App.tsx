import React, { useState, useCallback, useRef } from "react";
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
    setTimeout(runSimulation, 1000);
  }, []);

  return (
    <>
      <button
        onClick={ () => setRunning(!running) }
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
