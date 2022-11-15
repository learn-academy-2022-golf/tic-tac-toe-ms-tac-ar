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
  // we want to declare a winner once winning conditions are met. utilized the tic tact toe winner function from free code camp. changed squares to newGameBoard and created a new h2 line where the winner status will show
  function calculateWinner(newGameBoard) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        newGameBoard[a] &&
        newGameBoard[a] === newGameBoard[b] &&
        newGameBoard[a] === newGameBoard[c]
      ) {
        return newGameBoard[a];
      }
    }
    return null;
  }

  

  const marks = ["❌", "🅾️"];
  const markSelector1 = (index) => {
    let newGameBoard = [...gameBoard];
    // Create second player mark with boolean if else logic to state if X is last mark then next mark is O.
    // we need to move the else statements down and create a new if statement that checks to see if there is a value first and alert the players that they need to choose an empty square
    if (newGameBoard[index] !== "") {
      alert("Choose an empty square");
    } else if (markName === "🅾️") {
      newGameBoard[index] = "🅾️";
      setMarkName("❌");
    } else if (markName === "❌") {
      newGameBoard[index] = "❌";
      setMarkName("🅾️");
    }
    setGameBoard(newGameBoard);
  };
  // this calls upon the calculateWinner function and changes the status when the winning condition is met.
  // add alert to notify players of winning condition and who won which stops game.  
  const winner = calculateWinner(gameBoard);
  let status;
  if (winner === "❌") {
    status = "Winner Winner ❌";
    alert ("❌ is the Winner!")
  } else if (winner === "🅾️") {
    status = "Winner Winner for 🅾️";
    alert ("🅾️ is the Winner!")
  } 

  // give the ability for alternating players to choose the location of their marker.
  // the h2 line we added the status from line 84 to show under the h1 title
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>{status}</h2>
      <div className="gameBoard">
        {gameBoard.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleMark={markSelector1}
              status={status}
            />
          );
        })}
      </div>
    </>
  );
};
export default App;