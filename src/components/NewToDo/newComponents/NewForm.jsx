import React from 'react'

const NewForm = ({value, setValue, funcAdd}) => {

    const inputRef = React.useRef(null)

    React.useEffect(() => {
      if (inputRef.current)  inputRef.current.focus()
    })

    const handleKeyDown = (e) => {
      if (e.key === 'Enter')  funcAdd()
    }

  return (
    <div className='gorizont'>
       <input type="text" 
              value={value} 
              onChange={e => setValue(e.target.value)} 
              className='input'
              onKeyDown={handleKeyDown}
              ref={inputRef}/>
       <h1>{value}</h1>
       <button className='btn' onClick={funcAdd}>Add</button>
    </div>
  )
}

export {NewForm}
