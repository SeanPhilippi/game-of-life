import React from 'react';
import produce from 'immer';

const Graph = ({
  color,
  setColor,
  numCols,
  setGrid,
  runningRef,
  running,
  grid
}) => {
  console.log('color', color)
  runningRef.current = running;

  return (
    <div
      className='grid'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}
    >
      {grid.map((row, i) =>
        row.map((col, j) => (
          <div
            key={`${i}-${j}`}
            onClick={() => {
              const newGrid = produce(grid, gridCopy => {
                gridCopy[i][j] = grid[i][j] ? 0 : 1;
              });
              setGrid(newGrid);
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][j] ? color : null,
              border: 'solid 1px teal'
            }}
          />
        ))
      )}
    </div>
  );
};

export default Graph;
