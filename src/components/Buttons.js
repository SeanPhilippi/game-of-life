import React from 'react';

const Buttons = ({
  color,
  setColor,
  running,
  setRunning,
  runningRef,
  runSimulation,
  numRows,
  numCols,
  setGrid,
  generateEmptyGrid
}) => {
  return (
    <div className='buttons'>
      {/* START BUTTON */}
      <button
        className={running ? 'stop' : 'start'}
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? 'Stop' : 'Start'}
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
      {/* CLEAR BUTTON */}
      <button
        onClick={() => {
          setGrid(generateEmptyGrid());
        }}
      >
        Clear
      </button>
      {/* COLOR SELECT */}
      <select
        onChange={({ target: { value } }) => {
          console.log('value', value)
          setColor(value)
        }}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
        Clear
      </select>
    </div>
  );
};

export default Buttons;
