import React from 'react';
import { HuePicker } from 'react-color';

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
  setSpeed,
  generateEmptyGrid
}) => {
  const handleChangeComplete = color => {
    console.log(color);
    setColor(color.hex);
  };
  return (
    <div className="settings">
      <div className="buttons">
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
      </div>
      {/* COLOR SELECT */}
      <div className="hue-picker">
        <label htmlFor="hue-picker">Hue Picker</label>
        <HuePicker color={color} onChangeComplete={handleChangeComplete} />
      </div>
    </div>
  );
};

export default Buttons;
