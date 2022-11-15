import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

// gameBoard set up, 3 by 3 grid 200px squares with a black boarder.
// like the color box we want to clik the box and place an x inside instead of changing color

const App = () => {
  const [markName, setMarkName] = useState("❌");

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
    // Create second player mark with boolean if else logic to state if X is last mark then next mark is O.
     if(markName === "❌") {
      newGameBoard[index] = "❌";
      setMarkName ("🅾️");
     }
     else if(markName === "🅾️") {
      newGameBoard[index] = "🅾️";
        setMarkName ("❌");
      }
    setGameBoard(newGameBoard)
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
