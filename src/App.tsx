import React, { useState } from "react";
import "./App.css";

const numRows = 50;
const numColumns = 50;

const App: React.FC = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numColumns).fill(0)));
    };
    return rows;
  });

  console.log(grid)

  return <div>yo</div>
};

export default App;
