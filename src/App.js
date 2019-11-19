import React, { useState, useRef, useCallback } from 'react';
import Graph from './components/Graph';
import Buttons from './components/Buttons';
import produce from 'immer';

import './App.css';

const App = () => {
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
    [-1, 0]
  ];

  const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
      // rows.push(Array.from(Array(numCols).fill(0)));
    }
    return rows;
  };
  // initializing grid with calling of useState, destructuring grid and setGrid from the return
  // first value of return is the value of the state, second it the update function
  const [grid, setGrid] = useState(() => {
    // using callback so this is called only upon initial render
    return generateEmptyGrid();
  });
  // first param for useState is initial value
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);

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
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (currentGrid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 300);
  }, []);

  return (
    <>
      <Buttons
        numRows={numRows}
        numCols={numCols}
        runSimulation={runSimulation}
        generateEmptyGrid={generateEmptyGrid}
        running={running}
        setRunning={setRunning}
        runningRef={runningRef}
        setGrid={setGrid}
      />
      <Graph
        numRows={numRows}
        numCols={numCols}
        running={running}
        setRunning={setRunning}
        runningRef={runningRef}
        grid={grid}
        setGrid={setGrid}
      />
    </>
  );
};

export default App;
