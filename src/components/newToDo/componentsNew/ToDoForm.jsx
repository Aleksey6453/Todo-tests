import React from 'react'

const ToDoForm = ({value, setValue, func}) => {
    const change = (e) => {
        setValue(e.target.value)
    }

    const inputRef = React.useRef(null)

    React.useEffect (() => {
        if (inputRef.current) inputRef.current.focus()
      }, [])

  return (
    <div className='gorizont2'>
        <input value = {value} onChange={change} type="text" className='input' ref={inputRef} />
        <h2>{value}</h2>
        <button onClick={func} className='btn'>Add</button>
    </div>
  )
}

export {ToDoForm}
