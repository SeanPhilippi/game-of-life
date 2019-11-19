import React from "react";

const Buttons = ({
  running,
  runningRef,
  runSimulation,
  numRows,
  numCols,
  setGrid,
  generateEmptyGrid,
}) => {
  return (
    <>
      <button
        className={running ? "stop" : "start"}
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "Stop" : "Start"}
      </button>
      {/* RANDOM BUTTON */}
      <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }
          setGrid(rows);
        }}
      >
        Random
      </button>
      ;{/* CLEAR BUTTON */}
      <button
        onClick={() => {
          setGrid(generateEmptyGrid());
        }}
      >
        Clear
      </button>
    </>
  );
};

export default Buttons;
