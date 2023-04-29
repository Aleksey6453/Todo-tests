import React from 'react'

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <label className='todo_li'>
        <input value={text} 
                className='input' 
                onChange={(e)=> handleInput(e.target.value)} />
        <button className="btn" 
                onClick={handleSubmit}>Add Todo</button>
    </label>
  )
}

export default InputField
