import React from 'react'

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <>
       <label className='todo_card'>
          <input className='input' 
                type="text" value={text} 
                onChange={(e) => handleInput(e.target.value)} />

          <button className='btn' 
                  onClick={handleSubmit}>Add todo
          </button>
        </label>
    </>
  )
}

export default InputField
