import React, { useState } from 'react'


const Gameboard = ({board, onSelect}) => {
   
  return (
    <ol className='game-board'>
   {board.map((row,rowIndex) => (
    <li key={rowIndex}>
       <ol className='game-ol'>
       {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}><button disabled={playerSymbol} onClick={() => onSelect (rowIndex, colIndex)}>{playerSymbol}</button></li>
        ))}
       </ol>
    </li>
   ))}
    </ol>
  )
}

export default Gameboard