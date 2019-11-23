import React from 'react';
import produce from 'immer';

const Graph = ({
  color,
  numCols,
  setGrid,
  runningRef,
  running,
  grid
}) => {
  runningRef.current = running;

  return (
    <div
      className='grid'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 12px)`
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
              width: 12,
              height: 12,
              backgroundColor: grid[i][j] ? color : 'white',
              border: 'solid 1px black'
            }}
          />
        ))
      )}
    </div>
  );
};

export default Graph;
