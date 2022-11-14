import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';


// gameBoard set up, 3 by 3 grid 200px squares with a black boarder. 
// 

const App = () => {
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
  ])
  const [handleMark, setHandleMark] = useState()

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
            handleMark={handleMark}
            />
        )
      })}
    </div>
    </>
  )
}
