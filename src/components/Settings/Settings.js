import React from 'react';
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
  speed,
  setSpeed,
  speedDisabled,
  setSpeedDisabled,
  generateEmptyGrid
}) => {

  const marks = [
    {
      value: 500,
      label: '500 ms',
    },
    {
      value: 450,
      label: '450 ms',
    },
    {
      value: 400,
      label: '400 ms',
    },
    {
      value: 350,
      label: '350 ms',
    },
    {
      value: 300,
      label: '300 ms',
    },
    {
      value: 250,
      label: '250 ms',
    },
    {
      value: 200,
      label: '200 ms',
    },
    {
      value: 150,
      label: '150 ms',
    },
    {
      value: 100,
      label: '100 ms',
    },
    {
      value: 50,
      label: '50 ms',
    },
  ];


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
              setSpeedDisabled(!speedDisabled)
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
                  // map random 0s and 1s with mapping callback, biased towards 1 to populate grid more
                  // creating arrays of cols to push into the rows array
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
        {/* SPEED SLIDER */}
        <label htmlFor="speed-slider">Speed</label>
        <Slider
          value={speed}
          onChange={(e, newValue) => setSpeed(newValue)}
          defaultValue={200}
          valueLabelFormat={value => value}
          getAriaValueText={value => `${value}`}
          aria-labelledby="speed slider"
          step={50}
          marks={marks}
          min={50}
          max={500}
          valueLabelDisplay="off"
          disabled={speedDisabled}
        />
      </div>
    </div>
  );
};

export default Settings;
