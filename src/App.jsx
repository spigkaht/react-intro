import React, { useState } from 'react';
import './App.css';

const COLORS = ["pink", "yellow", "blue", "red", "green"];

function App() {
  const [color, setColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setColor(color);
  };

  return (
    <div
      className="App"
      style={{
        color
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={color === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <div>
        <p>Hello world!</p>
      </div>
    </div>
  )
};

export default App;
