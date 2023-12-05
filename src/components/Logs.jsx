import React from 'react'

const Logs = ({turns}) => {
  return (
    <div>
       <ol className='log-hd'>
       {turns.map((turn, index) => <li className='logbody' key={index}>Player {turn.player} selected row {turn.square.row}, col {turn.square.col}</li>)}
       </ol>
    </div>
  )
}

export default Logs