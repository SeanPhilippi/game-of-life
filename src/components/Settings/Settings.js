import React, { useState } from 'react';
import { HuePicker } from 'react-color';
import { Slider } from '@material-ui/core';

const Settings = ({
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
  speed,
  generateEmptyGrid
}) => {
  const handleChangeComplete = color => {
    setColor(color.hex);
  };

  return (
    <div className="settings">
      <div className="settings1">
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
          <HuePicker
            color={color}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      </div>
      <div className="settings2">
        <label htmlFor="hue-picker">Speed</label>
        <Slider
          value={speed}
          onChange={(e, newValue) => setSpeed(newValue)}
          defaultValue={200}
          valueLabelFormat={value => value}
          getAriaValueText={value => `${value}`}
          aria-labelledby="speed slider"
          step={50}
          marks
          min={0}
          max={500}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};

export default Settings;
