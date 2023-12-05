import React from 'react'

const GameOver = ({winner, resetGame}) => {
  return (
    <div className='game-over'>
      <h1>Game Over!</h1>
      {winner ? <p> {winner} wins</p>:''}
      {!winner ? <p>No Winner, It's A Draw</p>:''}
      <button onClick={resetGame}>Rematch</button>
    </div>
  )
}

export default GameOver