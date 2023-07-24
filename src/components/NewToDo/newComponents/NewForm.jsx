import React from 'react'

const NewForm = ({value, setValue, funcAdd}) => {

    const inputRef = React.useRef(null)

    React.useEffect(() => {
      inputRef.current.focus()
    }, [setValue])

  return (
    <div className='gorizont'>
       <input type="text" 
              value={value} 
              onChange={e => setValue(e.target.value)} 
              className='input'
              ref={inputRef}/>
       <h1>{value}</h1>
       <button className='btn' onClick={funcAdd}>Add</button>
    </div>
  )
}

export {NewForm}
