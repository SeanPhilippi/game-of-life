import React from "react";
import produce from "immer";

const Graph = ({
  numRows,
  numCols,
  setGrid,
  runningRef,
  running,
  grid
}) => {
  runningRef.current = running;

  return (
    <div
      style={{
        display: "grid",
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
              backgroundColor: grid[i][j] ? "maroon" : undefined, // if 0, maroon, if 1, undefined.  not null due to TS
              border: "solid 1px teal"
            }}
          />
        ))
      )}
    </div>
  );
};

export default Graph;
