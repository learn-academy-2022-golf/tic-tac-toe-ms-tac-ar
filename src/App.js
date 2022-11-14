import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

// gameBoard set up, 3 by 3 grid 200px squares with a black boarder.
// like the color box we want to clik the box and place an x inside instead of changing color

const App = () => {
  const [markName, setMarkName] = useState("");

  const [gameBoard, setGameBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const marks = ["❌", "🅾️"];
  const markSelector1 = (index) => {
    let newGameBoard = [...gameBoard];
    newGameBoard[index] = "❌";
    setGameBoard(newGameBoard);
  };
  // give the ability for alternating players to choose the location of their marker.
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameBoard">
        {gameBoard.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleMark={markSelector1}
            />
          );
        })}
      </div>
    </>
  );
};
export default App;
