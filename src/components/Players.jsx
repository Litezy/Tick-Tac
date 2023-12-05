import React, { useState } from 'react'

const Players = ({initialname, symbol, isActive, onChangePlayername}) => {
  const [edit, setEdit] = useState(false)
  const [updateName, setUpdateName] = useState(initialname)

  const handleChange = (event)=>{
    setUpdateName(event.target.value)
  }
  const editPlayerName = () => {
    setEdit((prev)=> !prev)
    if(edit){
      onChangePlayername(symbol, updateName)
    }
  }
  return (
   <li id='list-players' className={`${isActive ? 'active' :'' }`}>
    <span className='player'>
        {!edit ? <span className='newPlayer' >{updateName}</span>:
        <input className='newp' type="text" value={updateName} onChange={handleChange}/>}
        <span className='symbol'>{symbol}</span>
    </span>
    <button onClick={editPlayerName} className='btn'>{edit ? 'Save': 'Edit'}</button>
   </li>
  )
}

export default Players