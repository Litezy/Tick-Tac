import React, { useState } from 'react'
import Header from './components/Header'
import Players from './components/Players'
import Gameboard from './components/Gameboard'
import { WINNING_COMBO } from './components/WinninCombo'
import GameOver from './components/GameOver'
import Logs from './components/Logs'

const Gamebuttons = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
const checkActivePlayer = (gameTurns) =>{
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
  return currentPlayer
}

const App = () => {
  const [gameTurns, setGameTurns] = useState([])
  const [playerName, setPlayerName] = useState(
    {
      X: 'Player 1',
      O: 'Player 2'
    }
  )
   
  
  let gameboard = [...Gamebuttons.map(array => [...array])]
  const currentPlayer = checkActivePlayer(gameTurns)

  for(const turn of gameTurns){
  gameboard[turn.square.row][turn.square.col] = turn.player
  }

  let winner;
  for(const combination of WINNING_COMBO){
    const firstCombination = gameboard[combination[0].row][combination[0].column]
    const secondCombination = gameboard[combination[1].row][combination[1].column]
    const thirdCombination = gameboard[combination[2].row][combination[2].column]
   if(firstCombination && firstCombination === secondCombination && firstCombination === thirdCombination ){
    winner = playerName[firstCombination]
   }
    
  }

  const isDraw = gameTurns.length === 9 && !winner


 const handleSelect = (rowIndex, colIndex) => {
   setGameTurns((prevTurns) => {
    const currentPlayer = checkActivePlayer(prevTurns)
    const updatedTurn = [
     {
      square:{
        row: rowIndex,
        col: colIndex
      },
      player: currentPlayer
     }, ...prevTurns]
     return updatedTurn
    
   })
 }

 const resetGame = () => {
  setGameTurns([])
 }

 const UpdatePlayerName = (symbol, newName) =>{
 setPlayerName(prevname => {
  const newNames = {
    ...prevname,
    [symbol]: newName
  }
  return newNames
 })
 }

  return (
    <div className='head'>
      <main className='main'>
        <Header />
        <div className="container">
          <ol className='list'>
            <Players initialname='Player 1' symbol="X" isActive={currentPlayer === 'X'} onChangePlayername={UpdatePlayerName} />
            <Players initialname='Player 2' symbol="O" isActive={currentPlayer === 'O'} onChangePlayername={UpdatePlayerName} />
          </ol>
          {(winner || isDraw) && <GameOver winner={winner} resetGame={resetGame} />}
          <Gameboard board={gameboard}
          onSelect={handleSelect} />
        </div>
      </main>
      <div className="logs">
          <h3 className=''>Game Logs</h3>
          <Logs turns={gameTurns}/>
        </div>
        <footer>
          built by Litezy
        </footer>
    </div>
  )
}

export default App